import React from "react";

const IsLogin = () => {
  const isLogin = false;
  const name = "Ali";
  const surname = "Cansiz";

  return (
    <div>
      {isLogin ? (
        <h2>
          Sirketimize hosgeldiniz sayin {name} {surname}{" "}
        </h2>
      ) : (
        <h2>
          Giris bilgileri yanlis oldugu icin girisiniz kabul edilmedi sayin{" "}
          {name} {surname}
        </h2>
      )}
    </div>
  );
};

export default IsLogin;
