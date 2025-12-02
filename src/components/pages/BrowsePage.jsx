import { useParams } from "react-router-dom";
import PopBrowse from "../popups/PopBrowse/PopBrowse";

const BrowsePage = () => {
  const { id } = useParams();
  return <PopBrowse taskId={id} />;
};
export default BrowsePage;
