
export async function getGamas() {

    try{
        const res = await fetch('http://192.168.8.68:3001/api/gamas', {cache: 'no-store'})
        return res.json()
    }catch(error){
            throw new Error('Failed to fetch data')
    }
}