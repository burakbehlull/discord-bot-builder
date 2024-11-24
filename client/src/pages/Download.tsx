import { createBotRequest } from '@requests'

function Download() {
    async function handleBotRequest() {
        try {
            const res = await createBotRequest({})
            const blob = res.data
            const url = window.URL.createObjectURL(blob)

            const he = document.getElementById('download-zip') as HTMLAnchorElement
            if (he) {
                he.href = url
                he.download = 'bot.zip'
                he.click()
            }

            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error('Dosya indirilemedi:', error)
        }
    }

    return (
        <>
            
            <a id="download-zip" style={{ display: 'none' }}></a>
            <button onClick={handleBotRequest}>İndir</button>
        </>
    )
}

export default Download
