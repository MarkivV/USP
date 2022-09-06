import React, {useState} from 'react';
import CardMain from "../../components/CardMain/CardMain";
import {useDispatch, useSelector} from "react-redux";
import {createPost} from "../../redux/features/posts/postsSlice";
import {login, register} from "../../redux/features/auth/authSlice";
import {Button, Card, Container, Grid, IconButton, Input, InputAdornment, Stack, Typography} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch()

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [values, setValues] = React.useState({showPassword: false});

    const onSaveUserClicked = () =>{
        const formData = {username, password}
        console.log(formData)
        dispatch(register(formData))
        // setName('')
        // setEmail('')
        // setPassword('')
    }
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container maxWidth={"xl"} style={{padding: "29px"}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card style={{padding: "30px", borderRadius: 15}}>

                    <Stack spacing={2} style={{alignItems: "center"}}>
                        <Typography style={{ fontSize: "28px", fontWeight:  700, marginBottom: "0px", marginRight: "15px", color: "#000000"}} >Реєстрація</Typography>
                        <label htmlFor="postTitle">Імʼя користувача:</label>
                        <Input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={username}
                            style={{width: "80%"}}

                            onChange={(e)=>setName(e.target.value)}
                        />
                        <label htmlFor="postAuthor">Електронна пошта:</label>
                        <Input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={email}
                            style={{width: "80%"}}

                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <label htmlFor="postContent">Пароль:</label>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            style={{width: "80%"}}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={passwordCheck}
                            onChange={(e)=>setPasswordCheck(e.target.value)}
                            style={{width: "80%"}}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    onClick={onSaveUserClicked}*/}
                        {/*    disabled={!(password === passwordCheck)}*/}
                        {/*>Register</button>*/}
                        <Button
                            variant="contained"
                            style={{width: "200px", backgroundColor: "#FFFFFF", borderRadius: 20, marginTop: "25px", color: "#000000"}}
                            disabled={!(password === passwordCheck)}
                            onClick={onSaveUserClicked}
                        >Зареєструватися</Button>
                        <Stack spacing={1} style={{alignItems: "center"}}>
                            <Typography style={{ fontSize: "28px", fontWeight:  700, marginBottom: "0px", marginRight: "15px", color: "#000000"}} >Маєте аккаунту?</Typography>
                            <Typography style={{ fontSize: "20px", marginBottom: "auto", fontWeight:  400,  marginRight: "15px", color: "#000000"}} >Ввійдіть <Link to={"/login"} style={{textDecoration: "underline"}}>тут</Link> це дозволить вам пропонувати свій контент та багато іншого</Typography>
                        </Stack>
                    </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
