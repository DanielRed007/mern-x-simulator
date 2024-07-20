import { useState, Fragment } from "react";
import { apiHandler } from "@/lib/api/api-handler";
import DialogModal from "./shared/DialogModal";
import useAlert from "../hooks/widgets/useAlert";
import Alert from "./shared/Alert";
import { useDashboard } from "../context/DashboardContext";

const TweetForm = () => {
  const [newTweet, setNewTweet] = useState("");
  const { showAlert, handleShowAlert, setShowAlert } = useAlert(5000);
  const { fetchDashboardTweetsData } = useDashboard();

  const handleAddTweet = async (e: any) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const response = await apiHandler({
      endpoint: "/api/tweet",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      requestBody: { newTweet, token, action: "send request" },
    });

    await response.json();

    if (response.ok) {
      handleShowAlert();
      fetchDashboardTweetsData();
    } else {
      console.error(response);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleAddTweet} className='mb-4'>
        <textarea
          className='w-full p-2 border rounded-lg mb-2'
          placeholder="What's happening?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-lg'
        >
          Tweet
        </button>
      </form>

      {showAlert && (
        <Alert
          message='New Tweet Created'
          duration={1000}
          onClose={() => setShowAlert(false)}
        />
      )}
    </Fragment>
  );
};

export default TweetForm;
