import React, {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
  useEffect,
  useCallback,
} from 'react'

interface UseCodeInputArgs {
  length: number
  initialValue?: string
  onChange?: (code: string) => void
  onComplete?: (code: string) => void
}

const useCodeInput = ({
  length,
  initialValue = '',
  onChange,
  onComplete,
}: UseCodeInputArgs) => {
  const [code, setCode] = useState<string[]>(() => {
    const initialArray = Array(length).fill('')
    if (initialValue) {
      for (let i = 0; i < Math.min(initialValue.length, length); i++) {
        initialArray[i] = initialValue[i]
      }
    }
    return initialArray
  })
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    setCode(currentCode => {
      const newCode = Array(length).fill('')
      for (let i = 0; i < Math.min(currentCode.length, length); i++) {
        newCode[i] = currentCode[i]
      }
      if (initialValue) {
        for (let i = 0; i < Math.min(initialValue.length, length); i++) {
          newCode[i] = initialValue[i]
        }
      }
      return newCode
    })
    inputRefs.current = inputRefs.current.slice(0, length)
  }, [length, initialValue])

  const triggerChange = useCallback(
    (newCodeArray: string[]) => {
      const codeString = newCodeArray.join('')
      onChange?.(codeString)
      if (codeString.length === length && !newCodeArray.includes('')) {
        onComplete?.(codeString)
      }
    },
    [length, onChange, onComplete]
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const value = e.target.value.slice(-1)
      const newCode = [...code]
      if ((newCode[index] !== value || !value) && value.length <= 1) {
        newCode[index] = value
        setCode(newCode)
        triggerChange(newCode)
      }
    },
    [code, triggerChange]
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === 'Backspace') {
        e.preventDefault()
        const newCode = [...code]
        if (newCode[index]) {
          newCode[index] = ''
          setCode(newCode)
          triggerChange(newCode)
        } else if (index > 0) {
          inputRefs.current[index - 1]?.focus()
        }
        return
      }

      if (e.key === 'ArrowLeft') {
        if (index > 0) {
          e.preventDefault()
          inputRefs.current[index - 1]?.focus()
        }
        return
      }

      if (e.key === 'ArrowRight') {
        if (index < length - 1) {
          e.preventDefault()
          inputRefs.current[index + 1]?.focus()
        }
        return
      }

      if (/^[0-9]$/.test(e.key)) {
        e.preventDefault()
        const newCode = [...code]
        newCode[index] = e.key
        setCode(newCode)
        triggerChange(newCode)
        if (index < length - 1) {
          inputRefs.current[index + 1]?.focus()
        }
      }
    },
    [code, length, triggerChange]
  )

  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>, startIndex: number) => {
      e.preventDefault()
      const pastedData = e.clipboardData.getData('text')
      const newCode = [...code]
      let charsPasted = 0
      for (let i = 0; i < pastedData.length; i++) {
        if (startIndex + i < length) {
          newCode[startIndex + i] = pastedData[i].slice(0, 1)
          charsPasted++
        } else {
          break
        }
      }
      setCode(newCode)
      triggerChange(newCode)
      const nextFocusIndex = Math.min(startIndex + charsPasted, length - 1)
      if (inputRefs.current[nextFocusIndex]) {
        inputRefs.current[nextFocusIndex]?.focus()
      }
    },
    [code, length, triggerChange]
  )

  return { code, inputRefs, handleChange, handleKeyDown, handlePaste }
}

export default useCodeInput
