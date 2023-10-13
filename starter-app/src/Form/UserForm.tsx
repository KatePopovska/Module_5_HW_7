import React from "react";
import { Card, CardContent, CardMedia, Typography, TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import IUserUpdate from "../interfaces/IUserUpdate";
import {IUser} from "../interfaces/IUser";
import { useParams } from 'react-router-dom';
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
`;

const FormContent = styled.div`
  width: 50%;
  padding: 40px;
`;

const UserCardContainer = styled.div`
  width: 30%;
  padding: 40px;
`;

const UserForm: React.FC<any> = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IUserUpdate>();
  const { userId = 'defaultUserId' } = useParams<{ userId?: string }>();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${userId}`);
        const userData = response.data.data;

        setUser(userData);
      } catch (error) {
        console.error("Ошибка при загрузке данных пользователя:", error);
      }
    };

    fetchData();
  }, [userId]);

  const onSubmit: SubmitHandler<IUserUpdate> = async (data) => {
    try {
      const response = await axios.post(
        `https://reqres.in/api/users/${userId}`,
        data
      );

      if (response.status === 201) {
        alert("Данные успешно отправлены на сервер: " + JSON.stringify(response.data));
      
      } else {
        console.error("Ошибка при отправке данных на сервер");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных на сервер:", error);
    }

    reset();
  };

  return (
    <Container>
      <FormContent>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="Name"
                {...register("first_name", { required: true })}
                fullWidth
                margin="normal"
                error={!!errors.first_name}
                helperText={errors.first_name ? "Обязательное поле" : ""}
              />
              <TextField
                label="Last Name"
                {...register("last_name", { required: true })}
                fullWidth
                margin="normal"
                error={!!errors.last_name}
                helperText={errors.last_name ? "Обязательное поле" : ""}
              />
              <TextField
                label="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })}
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={
                  errors.email
                    ? "Введите корректный адрес электронной почты"
                    : ""
                }
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </FormContent>
      <UserCardContainer>
        {user && (
          <div>
            <Card>
      <CardMedia
        component="img"
        height="300"
    
        image={user.avatar} 
        alt={user.first_name}
      />
      <CardContent>
        <Typography variant="h5">{user.first_name}</Typography>
        <Typography> {user.last_name}</Typography>
        <Typography>{user.email}</Typography>
      </CardContent>

    </Card>   
          </div>
        )}
      </UserCardContainer>
    </Container>
  );
};

export default UserForm;