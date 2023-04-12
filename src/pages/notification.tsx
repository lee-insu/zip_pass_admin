import React, {useState} from "react";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {app} from "../../service/firebase";
interface PostData {
  created_at: Date;
  address: string;
  category: string;
  deposit: number;
  rent: number;
  area: number;
  title: string;
  body: string;
  pageId: string;
  exposure: boolean;
}

const Notification = () => {
  const db = getFirestore(app);
  const collectionRef = collection(db, "notification");
  const [postData, setPostData] = useState<PostData>({
    created_at: new Date(),
    address: "",
    category: "",
    deposit: 0,
    rent: 0,
    area: 0,
    title: "",
    body: "",
    pageId: "",
    exposure: true,
  });

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddPost = async () => {
    await addDoc(collectionRef, postData);
    try {
      setPostData({
        created_at: new Date(),
        address: "",
        category: "",
        deposit: 0,
        rent: 0,
        area: 0,
        title: "",
        body: "",
        pageId: "",
        exposure: true,
      });
    } catch (e) {
      alert(`Error adding Document ${e}`);
    }
  };

  return (
    <div className="w-3/5 m-auto space-y-6">
      <div className="h-[100px]"></div>
      <div>
        <label htmlFor="address" className="block text-lg font-medium mb-1">
          주소
        </label>
        <input
          type="text"
          name="address"
          value={postData.address}
          onChange={handleInputChange}
          className="w-4/5 border-2 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-lg font-medium mb-1">
          유형
        </label>
        <select name="category" onChange={handleInputChange}>
          <option value="">선택</option>
          <option value="청년임대주택">청년임대주택</option>
          <option value="인수주택">인수주택</option>
        </select>
      </div>
      <div>
        <label htmlFor="deposit" className="block text-lg font-medium mb-1">
          보증금
        </label>
        <input
          type="text"
          name="deposit"
          value={postData.deposit}
          onChange={handleInputChange}
          className="w-4/5 border-2 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="rent" className="block text-lg font-medium mb-1">
          렌트
        </label>
        <input
          type="text"
          name="rent"
          value={postData.rent}
          onChange={handleInputChange}
          className="w-4/5 border-2 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="area" className="block text-lg font-medium mb-1">
          면적
        </label>
        <input
          type="text"
          name="area"
          value={postData.area}
          onChange={handleInputChange}
          className="w-4/5 border-2 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="title" className="block text-lg font-medium mb-1">
          제목
        </label>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={handleInputChange}
          className="w-4/5 border-2 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="body" className="block text-lg font-medium mb-1">
          본문
        </label>
        <input
          type="text"
          name="body"
          value={postData.body}
          onChange={handleInputChange}
          className="w-4/5 border-2 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="pageId" className="block text-lg font-medium mb-1">
          페이지 ID
        </label>
        <input
          type="text"
          name="pageId"
          value={postData.pageId}
          onChange={handleInputChange}
          className="w-4/5 border-2 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        onClick={handleAddPost}
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
      >
        업로드 하기
      </button>
      <div className="h-[200px]"></div>
    </div>
  );
};

export default Notification;
