import {publicReq} from "../reqMethod";
import {
    textCreateSuccess,
    textCreateStart,
    textCreateError,
    getTextSuccess,
    getTextFailure,
    getTextStart,
    deleteTextSuccess,
    deleteTextFailure,
    deleteTextStart,
    updateTextFailure,
    updateTextStart,
    updateTextSuccess
} from "./postRedux"

export const createPost = async (dispatch,post) => {
    dispatch(textCreateStart());
    try {
        const res = await publicReq.post("/post/create", post)
        dispatch(textCreateSuccess(res.data));
        alert("Success")
    }catch (e) {
        dispatch(textCreateError());
        alert("Success, Update page")

    }
}

export const getPosts = async (dispatch) => {
    dispatch(getTextStart());
    try {
        const res = await publicReq.get("/post");
        dispatch(getTextSuccess(res.data));
    }catch (e) {
        dispatch(getTextFailure());
    }
}

export const deletePost = async (id,dispatch) => {
    dispatch(deleteTextStart());
    try {
        const res = await publicReq.delete(`/post/${id}`);
        dispatch(deleteTextSuccess(id,res.data));
        alert("Success")
    } catch (err) {
        dispatch(deleteTextFailure());
    }
};

export const updatePost = async (id, product, dispatch) => {
    dispatch(updateTextStart());
    try {
        // update
        const res = await publicReq.put(`/post/${id}`, product)
        dispatch(updateTextSuccess({ id, product }));
        alert("Success")
    } catch (err) {
        dispatch(updateTextFailure());
    }
};

