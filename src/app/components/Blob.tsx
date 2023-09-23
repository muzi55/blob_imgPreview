"use client";
import React, { useState } from "react";

const BlobImg = (): JSX.Element => {
  const [imgList, setImgList] = useState<string[]>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);

    if (file !== undefined) {
      const blobURL = URL.createObjectURL(file);
      setImgList([blobURL]);
    }
  };
  return (
    <>
      <input type="file" accept="image/jpeg, image/png, image/webp" onChange={onChange} />
      <img src={imgList?.[0]} alt="123" />
    </>
  );
};

export default BlobImg;
