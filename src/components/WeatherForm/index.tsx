import { FC, HTMLAttributes, PropsWithChildren } from "react";
import Form, { ISubmitHandler } from "../../common/Form";
import Input from "../../common/Input";
import * as Yup from "yup";
import Button, { ButtonTypes } from "../../common/Button";
import { useRouter } from "next/router";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = () => {
  const router = useRouter();

  const handleSubmit: ISubmitHandler = (value, action) => {
    const [city] = Object.values(value) as string[];
    router.push(`weather/result?city=${city}`);

    action.resetForm();
  };

  return (
    <div className="text-center">
      <Form
        initialNameValue={{ city: "" }}
        initialSchemas={yupSchemas}
        submitHandler={handleSubmit}
      >
        <Input label="city" role="city-input" />
        <Button
          type="submit"
          ButtonType={ButtonTypes.FiveButton}
          className="rounded-lg font-bold text-lg"
          role="button"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default index;

const yupSchemas = Yup.object({
  city: Yup.string()
    .min(3, "city must be longer than three characters")
    .required(),
});
