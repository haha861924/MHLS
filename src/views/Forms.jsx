import { Modal, Button } from "flowbite-react";
import { Gender, Activity, Pregnancy } from "../models/Information";
import InputField from "../components/Form/InputFiled";
import useStore from "../store";

export default function Form({ show, onClick }) {
  const {
    setGender,
    setBirth,
    setHeight,
    setWeight,
    setBodyFat,
    setWaistLine,
    setActivity,
    setPregnancy,
    setCount,
  } = useStore();
  const {
    gender,
    birth,
    height,
    weight,
    bodyFat,
    waistLine,
    pregnancy,
    activity,
  } = useStore();

  const onSubmit = (e) => {
    e.preventDefault();
    setCount();
    onClick();
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
                  data={Gender}
                  select={true}
                  value={gender}
                  onChange={({ target }) => setGender(target.value)}
                />
                <InputField
                  htmlFor="date"
                  label="生日"
                  type="date"
                  value={birth}
                  onChange={({ target }) => setBirth(target.value)}
                />
              </div>
              <div className="flex space-x-5">
                <InputField
                  htmlFor="height"
                  label="身高(公分)"
                  value={height}
                  onChange={({ target }) => setHeight(target.value)}
                />
                <InputField
                  htmlFor="weight"
                  label="體重(公斤)"
                  value={weight}
                  onChange={({ target }) => setWeight(target.value)}
                />
                <InputField
                  htmlFor="bodyFat"
                  label="體脂(%)"
                  value={bodyFat}
                  onChange={({ target }) => setBodyFat(target.value)}
                />
                <InputField
                  htmlFor="waistLine"
                  label="腰圍(公分)"
                  value={waistLine}
                  onChange={({ target }) => setWaistLine(target.value)}
                />
              </div>

              <div className="flex space-x-5">
                <InputField
                  htmlFor="activity"
                  label="活動量"
                  onChange={({ target }) => setActivity(target.value)}
                  data={Activity}
                  select={true}
                  value={activity}
                />
                <InputField
                  htmlFor="pregnancy"
                  label="懷孕哺乳狀態"
                  onChange={({ target }) => setPregnancy(target.value)}
                  data={Pregnancy}
                  select={true}
                  value={pregnancy}
                  disabled={gender !== "女性"}
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
