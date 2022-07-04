import React, {useEffect, useState} from "react";
import {Navbar} from "../components";
import "./second.scss"
import { DataGrid } from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {createPost, deletePost, getPosts, updatePost} from "../redux/apiCalls";
import {Link} from "react-router-dom";
const Second = () => {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(null)
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.post.text)

    const [inputs, setInputs] = useState({});
    const handleDelete = (id) => {
        deletePost(id,dispatch)
    }

    useEffect(() => {
        getPosts(dispatch)
    },[dispatch])
    console.log(posts)

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleClick = (e) => {
        e.preventDefault()
        const post = {...inputs}
        console.log(post)
        createPost(dispatch,post)
    }
    const handleEdit = (e,id) => {
      e.preventDefault();
      setShow(true)
      setEdit(id)
    }
    const handleUpdate = (e,id) => {
      e.preventDefault()
      const post = {...inputs}
      updatePost(id,post,dispatch)
    }
    const columns = [
        {field: '_id', headerName: 'ID', width: 220},
        {
            field: 'text',
            headerName: 'Text',
            width: 560,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return(
                    <>
                        <button className="productListEdit" onClick={(e) => handleEdit(e,params.row._id)}>Edit</button>
                        <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
        }
    ]

    return(
        <div className="product">
            <Navbar/>
            <div className="top-block">
                <div className="create-post">
                    <form className="addPostForm">
                        <div className="addPost">
                            <label>Post Post</label>
                            <input name="text" placeholder="Some text" onChange={handleChange} type="text"/>
                        </div>
                        <div>
                            <button onClick={handleClick} className="productListEdit">Create</button>
                        </div>
                    </form>
                </div>
                <div className="bottom-block">
                    <DataGrid
                        columns={columns}
                        disableSelectionOnClick
                        rows={posts}
                        getRowId={(row) => row._id}
                        pageSize={8}
                        checkboxSelection
                        autoHeight
                    />
                </div>
            </div>
            {show ? (
                <div className="create-post">
                    <form className="addPostForm">
                        <div className="addPost">
                            <label>Edit Text - ID = {edit}</label>
                            <input name="text" placeholder="Some text" onChange={handleChange} type="text"/>
                        </div>
                        <div>
                            <button onClick={(e) => handleUpdate(e,edit)} className="productListEdit">Create</button>
                        </div>
                    </form>
                </div>
            ) : null}
        </div>
    )
}
export default Second