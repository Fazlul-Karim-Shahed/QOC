import axios from "axios"


export const getAllFilesApi = async () => {

    let files = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/files', {
        headers: {
            Authorization: window.localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
            // "Content-Type": 'multipart/form-data'
        }
    }).then(data => data.data).catch(err => {
        return { message: `Something went wrong. - (${err.message}). Try again`, error: true }
    })


    return files

}


export const deleteFileApi = async (filename) => {

    let files = axios.delete(process.env.REACT_APP_BACKEND_URL + '/api/files/' + filename, {
        headers: {
            Authorization: window.localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
            // "Content-Type": 'multipart/form-data'
        }
    }).then(data => data.data).catch(err => {
        return { message: `Something went wrong. - (${err.message}). Try again`, error: true }
    })


    return files

}