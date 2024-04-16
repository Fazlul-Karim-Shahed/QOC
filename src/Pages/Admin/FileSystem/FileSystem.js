import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAllFilesApi, deleteFileApi } from '../../../Api/Admin/FileSystemApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const FileSystem = (props) => {

    const [filesInDatabase, setFilesInDatabase] = useState([])
    const [allFiles, setAllFiles] = useState([])

    useEffect(() => {

        getAllFilesApi().then(data => {

            setFilesInDatabase(data.data.filesInDatabase)
            setAllFiles([...data.data.allFiles])
        })

    }, [])


    const deleteFile = item => {
        
        if(window.confirm("Are you sure to delete this permanently ?")){
            deleteFileApi(item).then(data => {

                console.log(data)

            getAllFilesApi().then(data => {

            setFilesInDatabase(data.data.filesInDatabase)
            setAllFiles([...data.data.allFiles])
        })

        })
        }

    }


    return (
        <div>

            <div className="p-5 bg-red-100 rounded mb-10"> All your uploaded files in database is stored in our server section. if you delete any file (outline, material, resource, focus and etc.) by mistake, you may find it in server section (As Backup).So, Its recomended to delete all unnecessary files from server section (Red marked) whenever you delete anything from database. It will prevent memory wastage. <span>Total allocated 500 GB</span> </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className='p-5'>
                    <div className=" mb-3"> <span className='font-bold'>Database </span> ( Your current uploaded files ) </div>
                    <div className='border shadow'>
                        {filesInDatabase.map(item => {
                            return <div className='p-2 text-center border-b hover:bg-slate-50'>{item}</div>
                        })}
                    </div>
                </div>
                <div className=' p-5'>
                    <div className="mb-3"> <span className='font-bold '>Server</span> ( All backup files ) </div>
                    <div className='border shadow'>
                        {allFiles.map(item => {
                            return <div className={`p-2 text-center border-b hover:bg-slate-50 ${!filesInDatabase.includes(item) ? 'text-error font-bold bg-red-50' : ''}`}>{item} {!filesInDatabase.includes(item) && <FontAwesomeIcon className='ms-3' onClick={()=>deleteFile(item)} icon={faTrash} /> } </div>
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileSystem)