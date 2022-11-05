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
          <img
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
            className="cellImg"
          />
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
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

// export const userRows = [
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "pending",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "passive",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     username: "Snow",
//     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
// ];
