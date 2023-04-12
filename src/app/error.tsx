"use client";

const Error = ({ children }: any, props: any) => {
  console.log(props);
  return (
    <div>
      Error <div>{children}</div>
    </div>
  );
};

export default Error;
