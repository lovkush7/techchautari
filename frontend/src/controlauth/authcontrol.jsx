import { create } from "zustand";
import api from "../api/api";

const Authcontrol = create((set)=>({
    authUser: null ,
    ischeckingauth: false,
    isloggingin: false,
    issigningup: false,
    isupdatingprofile: false,


    check: async()=>{
        try{
            set({ischeckingauth: true});
            const res = await api.get("/auth/checkroute");
            set({authUser: res.data})
            console.log(res);

        }catch(err){
            console.log("the error is "+err)
        }finally{
            set({ischeckingauth: false});

        }
    },
    login: async (data)=>{
        try{
            set({isloggingin: true});
            const res = await api.post("/auth/login", data);
            set({authUser: res.data});
            console.log(res);

        }catch(err){
            console.log("the error is "+err)
        }finally{
            set({isloggingin: false});
        }
    },

    signup: async (data)=>{
        try{
            set({issigningup: true});
            const res = await api.post("/auth/register", data);
            set({authUser: res.data});
            console.log(res);

        }catch(err){
            console.log("the error is "+err)
        }finally{
            set({issigningup: false});
        }
    }
}));
export default Authcontrol;