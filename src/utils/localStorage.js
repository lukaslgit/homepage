export function setItem(key, value){
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}

export function getItem(key){
    try {
        const item = window.localStorage.getItem(key)

        const value = JSON.parse(item)

        const allowedLang = ["eng", "ger", "svk"];

        return allowedLang.includes(value) ? JSON.parse(item) : undefined
    } catch (error) {
        console.log(error)
    }
}