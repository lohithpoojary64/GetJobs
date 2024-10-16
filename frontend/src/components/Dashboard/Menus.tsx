"use client";
import React from "react";
import { Menu, Checkbox, Button, Modal } from "antd";
import { useState } from "react";

const { Item } = Menu;

const items = [
  {
    key: "sub1",
    label: "Work Mode",

    children: [
      { key: "1", label: "Work From Office" },
      { key: "2", label: "Remote" },
      { key: "2", label: "Hybrid" },
    ],
  },
  {
    key: "sub2",
    label: "Experience",

    children: [
      { key: "3", label: "Fresher" },
      { key: "4", label: "1-2 years" },
      { key: "5", label: "3+ years" },
      { key: "6", label: "more than 5 years" },
    ],
  },
  {
    key: "sub3",
    label: "Salary",

    children: [
      { key: "7", label: "3-6 Lakhs" },
      { key: "8", label: "6-10 Lakhs" },
      { key: "9", label: "10-15 Lakhs" },
      { key: "10", label: "15-25 Lakhs" },
    ],
  },
  {
    key: "grp",
    label: "Department",
    children: [
      { key: "11", label: "Engineering - Software & QA" },
      { key: "12", label: "Sales & Bussiness" },
      { key: "13", label: "It and Information Security" },
      { key: "14", label: "Customer service" },
    ],
  },
  {
    key: "grp",
    label: "Location",
    children: [
      { key: "11", label: "Manglore" },
      { key: "12", label: "Banglore" },
      { key: "13", label: "Udupi" },
      { key: "14", label: "Mumbai" },
    ],
  },
  {
    key: "grp",
    label: "Department",
    children: [
      { key: "11", label: "Engineering - Software & QA" },
      { key: "12", label: "Sales & Bussiness" },
      { key: "13", label: "It and Information Security" },
      { key: "14", label: "Customer service" },
    ],
  },
  {
    key: "grp",
    label: "Department",
    children: [
      { key: "11", label: "Engineering - Software & QA" },
      { key: "12", label: "Sales & Bussiness" },
      { key: "13", label: "It and Information Security" },
      { key: "14", label: "Customer service" },
    ],
  },
  {
    key: "grp",
    label: "Location",
    children: [
      { key: "11", label: "Mangalore" },
      { key: "12", label: "Bangalore" },
      { key: "13", label: "Udupi" },
      { key: "14", label: "Mumbai" },
      { key: "view-more", label: "View More" }, // Adding View More option
    ],
  },
];

const stateList = [
  "Delhi",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
];

const Menus: React.FC = () => {
  const onClick = (e: string) => {
    console.log("click ", e);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkedStates, setCheckedStates] = useState<string[]>([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log("Selected States:", checkedStates);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckedStates([...checkedStates, value]);
    } else {
      setCheckedStates(checkedStates.filter((state) => state !== value));
    }
  };

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.key === "view-more") {
        return (
          <Item key={item.key}>
            <Button type="link" onClick={showModal}>
              {item.label}
            </Button>
          </Item>
        );
      }
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} title={item.label}>
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }

      return (
        <Item key={item.key}>
          <Checkbox>{item.label}</Checkbox>
        </Item>
      );
    });
  };

  return (
    <>
      <Menu mode="inline" style={{ width: 256 }}>
        {renderMenuItems(items)}
      </Menu>

      <Modal
        title="Select States"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {stateList.map((state) => (
          <div key={state}>
            <Checkbox value={state} onChange={handleCheckboxChange}>
              {state}
            </Checkbox>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default Menus;
