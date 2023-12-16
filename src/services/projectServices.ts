export const uploadFile = async (formData: FormData) => {
    const response = await fetch('/upload-project-image', {
        method: 'POST',
        body: formData
    })
    return await response.json()
}