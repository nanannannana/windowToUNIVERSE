import React from 'react';
import { Row, Modal } from 'antd';
import WindowBtn from '../../components/window/WindowBtn';
import { useNavigate } from 'react-router-dom';
import DrawerToggler from '../../components/common/DrawerToggler';
import styled from 'styled-components';
import PaginationImg from '../../components/window/PaginationImg';
import queryString from 'query-string';

const Toggle = styled.div`
  position: fixed;
  right: 0;
  top: 0;
`;
const { warning } = Modal;

export default function Window_Tag({ country, basicTag, searchTag }) {
  const navigate = useNavigate();
  const arr = [10, 14, 9, 7, 8, 5, 12, 7];
  const user_id = localStorage.getItem('userid');

  const btnClick = () => {
    if (user_id === null) {
      warning({
        title: '로그인이 필요합니다!',
        content: '버튼을 누르면 로그인 페이지로 이동합니다.',
        onOk() {
          navigate('/user/signin');
        },
      });
    } else {
      navigate('/window/upload');
    }
  };

  return (
    <div className="TagFullBox">
      <Toggle>
        <DrawerToggler />
      </Toggle>
      <Row gutter={[15, 15]}>
        {country.length !== 0
          ? country.map((v, i) => <PaginationImg data={v} arr={arr} i={i} />)
          : queryString.parse(location.search).search
          ? searchTag.map((v, i) => <PaginationImg data={v} arr={arr} i={i} />)
          : basicTag.map((v, i) => <PaginationImg data={v} arr={arr} i={i} />)}
      </Row>
      <div className="TagPageWindowBtn">
        <WindowBtn
          clickEvent={btnClick}
          borderColor="#C2CCA8"
          color="#C2CCA8"
          hoverBackgroundColor="#C2CCA8"
          hoverBorderColor="#ffffff"
          hoverColor="#ffffff"
          fontSize="1.5em"
          height="auto"
          text="share your WINDOW"
        />
      </div>
    </div>
  );
}
