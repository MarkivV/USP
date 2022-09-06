import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/features/auth/authSlice";
import {
    Button,
    Card,
    CardMedia,
    Container,
    Grid, IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const Login = () => {
    const dispatch = useDispatch()

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [values, setValues] = React.useState({showPassword: false});
    const navigate = useNavigate()
    const onSaveUserClicked = () =>{
        const formData = {email, password}
        console.log(formData)
        dispatch(login(formData))
        navigate("/main")
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
                            <Typography style={{ fontSize: "28px", fontWeight:  700, marginBottom: "0px", marginRight: "15px", color: "#000000"}} >Авторизація</Typography>
                                <InputLabel htmlFor="standard-adornment-password">Електронна пошта:</InputLabel>
                                <Input
                                    type="text"
                                    id="postTitle"
                                    name="postTitle"
                                    value={email}
                                    style={{width: "80%"}}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
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
                                <Button
                                    variant="contained"
                                    style={{width: "200px", backgroundColor: "#000000", borderRadius: 20, marginTop: "25px"}}
                                    onClick={onSaveUserClicked}
                                >Ввійти</Button>
                            <Stack spacing={1} style={{alignItems: "center"}}>
                                <Typography style={{ fontSize: "28px", fontWeight:  700, marginBottom: "0px", marginRight: "15px", color: "#000000"}} >Не маєте аккаунту?</Typography>
                                <Typography style={{ fontSize: "20px", marginBottom: "auto", fontWeight:  400,  marginRight: "15px", color: "#000000"}} >Зареєструйтесь <Link to={"/register"} style={{textDecoration: "underline"}}>тут</Link> це дозволить вам пропонувати свій контент та багато іншого</Typography>
                            </Stack>
                            </Stack>
                    </Card>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                        component={"img"}

                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
