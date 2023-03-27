import "./CourseRegister.css";
import Card from "../../components/Card/Card";
import InputGroup from "../../components/InputGroup/InputGroup";
import Button from "../../components/button/button"
import { BUTTON_VARIANT } from "../../components/Button/ButtonVariant";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import useCourseRegister from "../../hooks/useCourseRegister"

const schema = yup.object().shape({
    name:yup.string().required('Campo obrigatório'),
    imageUrl:yup.string().url("Deve ser uma URL").required("Campo obrigatório"),
    category:yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    duration:yup.number().required("Precisa ser um número"),
    targetMarket:yup.string().required("Campo obrigatório")
})


function CourseRegister() {

    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}}= useForm({
    defaultValues: {
        name:"",
        imageUrl:"",
        category:"",
        description:"",
        duration:"",
        targetMarket:""

    },resolver: yupResolver(schema)})

    const { isSubmitting, registerCourse } = useCourseRegister();

    const onSubmit = (data) => {
        registerCourse(data)
      }

  return (
    <section className="register">
      <Card>
        <h1>Cadastrar Curso</h1>
        <form className="registerForm" onSubmit = {handleSubmit(onSubmit)}>
          <InputGroup labelText="Nome" placeholder="Nome do curso" {...register("name")} helperMessage ={ errors?.name?.message}></InputGroup>
          <InputGroup labelText="Url ícone" placeholder="Url contendo ícone" {...register("imageUrl")} helperMessage ={ errors?.imageUrl?.message}></InputGroup>
          <InputGroup labelText="Duração" placeholder="Duração do curso" {...register("duration")} helperMessage ={ errors?.duration?.message}></InputGroup>
          <InputGroup labelText="Categoria" placeholder="Categoria do curso" {...register("category")} helperMessage ={ errors?.category?.message}></InputGroup>
          <InputGroup labelText="Descrição" placeholder="Descrição detalhada do curso" {...register("description")} helperMessage ={ errors?.description?.message}></InputGroup>
          <InputGroup labelText="Público alvo" placeholder="Público alvo do curso" {...register("targetMarket")} helperMessage ={ errors?.targetMarket?.message}></InputGroup>
          
          <Button variant={BUTTON_VARIANT.SECONDARY_OUTLINED}>
            Adicionar
          </Button>
          <Button type= "submit" variant={BUTTON_VARIANT.PRIMARY} disabled={isSubmitting}>
            Cadastrar
          </Button>
          <Button type= "button" variant={BUTTON_VARIANT.PRIMARY_LINK} onClick={() => navigate("/home")}>
            Cancelar
          </Button>
        </form>
      </Card>
    </section>
  );
}

export default CourseRegister;
