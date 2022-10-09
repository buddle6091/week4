/* 모듈에 필요한 것 : 액션 value (상수), 액션 객체 리턴 함수, 초기값, reducer */

// Action type
const SEND = "TODOSTORE/SEND"; // 상수로 생성
const REDIRECT = "TODOSTORE/REDIRECT";

// Return Action Object -> must have key / the 'order' to reducer
// payload value : title, content
export const todoData = (payload) => {
  return {
    type: SEND,
    payload,
  };
};
// 초기 상태값

const initialState = {
  list: [
    {
      id: 1,
      title: "react",
      content: "react를 알아봐요",
      isDone: true,
    },
    {
      id: 2,
      title: "vue",
      content: "vue를 알아봐요",
      isDone: false,
    },
  ],
};

// 리듀서
const todoStore = (state = initialState, action) => {
  switch (action.type) {
    case SEND: {
      return {
        ...state,
        list: [...state.list, action.payload, action.payload],
      };
    }
    case REDIRECT: {
      return {};
    }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todoStore;