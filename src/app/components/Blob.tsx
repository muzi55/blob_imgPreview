"use client";
import React, { useState } from "react";

const BlobImg = (): JSX.Element => {
  const [imgList, setImgList] = useState<string[]>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file !== undefined) {
      const blobURL = [...file].map((el) => URL.createObjectURL(el));
      console.log(blobURL);
      setImgList(blobURL);
    }
  };
  return (
    <>
      <input type="file" multiple accept="image/jpeg, image/png, image/webp" onChange={onChange} />
      {imgList?.map((el, index) => (
        <img key={el + index} src={el} alt="이미지 미리보기" />
      ))}
    </>
  );
};

export default BlobImg;
