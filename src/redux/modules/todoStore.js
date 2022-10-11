/* 모듈에 필요한 것 : 액션 value (상수), 액션 객체 리턴 함수, 초기값, reducer */

// Action type
const SEND = "TODOSTORE/SEND"; // 상수로 생성
const DELETE = "TODOSTORE/DELETE";
const UPDATE = "TODOSTORE/UPDATE";
const REDIRECT = "TODOSTORE/REDIRECT";

// Return Action Object -> must have key / the 'order' to reducer
// payload value : title, content
export const sendTodo = (payload) => {
  return {
    type: SEND,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

// payload value : id, isDone
export const updateTodo = (payload) => {
  return {
    type: UPDATE,
    payload,
  };
};

export const redirectTodo = (id) => {
  return {
    type: REDIRECT,
    id,
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

  /* 상세페이지에서'만' 쓰이기 위한  */
  void: [
    {
      id: "0",
      title: "",
      content: "",
      isDone: false,
    },
  ],
};

// 리듀서
const todoStore = (state = initialState, action) => {
  switch (action.type) {
    case SEND: {
      return {
        ...state, // 여기서 아마 깊은복사로 state를 초기화 해주는 듯 ㅇㅇ
        list: [...state.list, action.payload],
      };
    }
    case UPDATE: {
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.id === action.payload) {
            // payload.id 이딴거 없음.
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    }
    case DELETE: {
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };
    }
    case REDIRECT: {
      return {
        ...state,
        void: state.list.find((todo) => {
          return todo.id === action.id;
        }),
      };
    }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todoStore;
