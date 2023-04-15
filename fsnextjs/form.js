import React, { useRef, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
export default function Form({ datas }) {
    const [data, setData] = useState(datas)
    const name = useRef()
    const email = useRef();
    const password = useRef();
    const handleForm = (e) => {
        e.preventDefault();
        try {
            if (!name.current.value || !email.current.value || !password.current.value) {
                alert("fill all the fields")
            }
            else {
                const formData = {
                    name: name.current.value,
                    email: email.current.value,
                    password: password.current.value,
                }
                axios.post('/api/createuser', formData)
                    .then((data) => {
                        if (data.data.status === 0) {
                            alert(data.data.msg)
                        }
                        else {
                            setData(data.data.data);
                        }

                    })
                    .catch((err) => {
                        console.log("Err");
                    })
            }

        } catch (error) {
            console.log(error)
        }
        name.current.value = ''
        email.current.value = ''
        password.current.value = ''
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleForm} style={{ display: "grid", width: "50%", margin: "auto", paddingTop: "10vh", gap: "1rem" }}>
                <input ref={name} type="text" placeholder='name' />
                <input ref={email} type="text" placeholder='email' />
                <input ref={password} type="password" placeholder='password' />
                <button type='submit'>submit</button>
            </form>

            <div className={styles.container}>
                {/* {data ? <main>
                    <div className={styles.grid} style={{ margin: "3rem" }}>
                        {data.map(e => {
                            return (
                                <a key={e._id} href='#' className={styles.card}>
                                    <h2>{e.name} &rarr;</h2>
                                    <p >{e.email}</p>
                                </a>
                            )
                        })}
                    </div>
                </main> : "loading"} */}
            </div>
        </>
    )
}
export const getStaticProps = async () => {
    const getUsers = await fetch('https://dummyjson.com/products')
    const { allUsers } = await getUsers.json();
    return {
        props: {
            datas: allUsers
        }
    }
}