export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (error) {
    alert('Your browser does not support')
  }
}
