import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("@/components/EditorWithQuill"), {
  ssr: false,
});

const MyPage = () => {
  return (
    <div className="p-10">
      <ReactQuill placeholder="Write something..." />
    </div>
  );
};

export default MyPage;
