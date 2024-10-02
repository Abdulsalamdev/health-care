"use server";
import axios from "axios";
export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:5000/api/data"); // Adjust URL as necessary
    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}
