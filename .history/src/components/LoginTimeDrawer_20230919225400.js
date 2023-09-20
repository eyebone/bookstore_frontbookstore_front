import { Button, Drawer, theme } from "antd";
import React,{useState} from "react";


const LoginTimeDrawer: React.FC = ({minutes, seconds}) => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    height: 200,
    padding: 48,
    overflow: "hidden",
    textAlign: "center",
    background: token.colorFillAlter,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={containerStyle}>
      上次登录时长
      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={showDrawer}>
          点击查看
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default LoginTimeDrawer;
