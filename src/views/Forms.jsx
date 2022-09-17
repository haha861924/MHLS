import { Modal, Button, Label, TextInput, Checkbox } from "flowbite-react";
import { Gender, Activity, Pregnancy } from "../models/Information";
import InputField from "../components/Form/InputFiled";

export default function Form({ show, onClick }) {
  const onChange = ({ target }) => console.log("change");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal show={!show} size="3xl" onClose={onClick}>
        <Modal.Header>基本資料</Modal.Header>
        <form onSubmit={onSubmit}>
          <Modal.Body>
            <div className="space-y-5">
              <div className="flex space-x-5">
                <InputField
                  htmlFor="gender"
                  label="性別"
                  onChange={onChange}
                  data={Gender}
                  select={true}
                />
                <InputField htmlFor="date" label="生日" type="date" />
              </div>
              <div className="flex space-x-5">
                <InputField htmlFor="height" label="身高(公分)" />
                <InputField htmlFor="weight" label="體重(公斤)" />
                <InputField htmlFor="bodyFat" label="體脂(%)" />
                <InputField htmlFor="waistLine" label="腰圍(公分)" />
              </div>

              <div className="flex space-x-5">
                <InputField
                  htmlFor="activity"
                  label="活動量"
                  onChange={onChange}
                  data={Activity}
                  select={true}
                />
                <InputField
                  htmlFor="pregnancy"
                  label="懷孕哺乳狀態"
                  onChange={onChange}
                  data={Pregnancy}
                  select={true}
                  disabled={true}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">確定</Button>
            <Button color="gray" onClick={onClick}>
              取消
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
