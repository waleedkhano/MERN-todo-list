import { useState } from "react";
import './home.css';
import Header from "./component/Header";
import axios from "axios";
import toast from "react-hot-toast";
import Goals from "./component/Goals";


const Home = () => {

    const [data, setdata] = useState({
        title: '',
        description: ''
    });
    
   
    const submitData = async (e) => {
        e.preventDefault();

        const {title, description} = data;

        try {
            const response = await axios.post('/api/list', {
                title,
                description
            });
        const responseData = response.data;

        if(responseData.error){
            toast.error(responseData.error)
        }else{
            setdata(()=>({
                title: '',
                description: ''
            }))
        }

        } catch (error) {
            console.log(error)
        }

    };



    return (
        <>

            <div className="home">

                <Header/>

                <form onSubmit={submitData}>
                    <input className="title inp" type='text' placeholder="Title"
                        value={data.title}
                        onChange={(e) => setdata({...data, title: e.target.value})}
                    />
                    <input className="des inp" type='text' placeholder="Description"
                        value={data.description}
                        onChange={(e) => setdata({...data, description: e.target.value})}
                    />
                    <button className="btn inp" type="submit">ADD</button>
                </form>
                <div className="goals">
                <Goals/>
                </div>
            </div>


        </>
    )
}

export default Home;