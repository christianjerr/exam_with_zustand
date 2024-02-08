import { create } from "zustand";
import * as models from "./models";
import axios from "axios";

export const usePlaceStore = create<models.InitialStateTypes>((set) => ({
  itemInitial: [
    {
      code: "",
      name: "",
      states: [
        {
          code: "",
          name: "",
          cities: [
            {
              name: "",
              population: "",
            },
          ],
        },
      ],
      id: "",
    },
  ],
  fetchModes: async () => {
    const response: { data: models.ItemRes } = await axios.get(
      `http://localhost:3000/countriesArray`
    );
    set({
      itemInitial: response.data,
    });
  },
}));
