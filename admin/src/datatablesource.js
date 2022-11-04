export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="avatar" className="cellImg" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Country",
    width: 100,
  },
  {
    field: "status",
    headerName: "City",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "pending",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "passive",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 8,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 9,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 10,
    username: "Snow",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
];
