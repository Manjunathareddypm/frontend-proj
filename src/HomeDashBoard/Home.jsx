// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllBlogs } from '../redux/Slice/HomeDashboardSlice'
// import Blog from '../Blog/BlogModel/Blog'
// import { Link } from 'react-router-dom'
// import './Home.css'
// import NativeSelectDemo from '../Utils/NativeSelectDemo'
// import { Card, Container } from '@mui/material'
// import { arrangeByLikesSortLowToHigh, getAllBlogsService } from '../Services/blogs.service'
// import { viewPostService } from '../Services/blogs.service'
// import { setForSearchType } from '../redux/Slice/HomeDashboardSlice'
// import { arrangeByLikesSortHighToLowService } from '../Services/blogs.service'
// import NativeSelectDemo1 from '../Utils/NativeSelectDemo1'
// import { setrelevanceType } from '../redux/Slice/HomeDashboardSlice'
// function Home() {
//     const dispatch = useDispatch()
//     // const fetch1 = async () => {
//     //     const data = await getAllBlogsService()
//     //     dispatch(data.data.data)    
//     // }
//     // fetch1()
//     const valueOfBlogType = useSelector((c) => {
//         return c.allBlogReducer.typeOfBlog
//     })

//     const [stateForBlogHome, setstateForBlogHome] = useState([])
//     const valuOfRelevance = useSelector((c) => {
//         console.log(c.allBlogReducer.relevanceType, "Value of relevance");
//         return c.allBlogReducer.relevanceType
//     })

//     const initialValue = async () => {
//         // dispatch(setForSearchType("Dashbaord"))
//         dispatch(setrelevanceType("All"))
//         const data = await getAllBlogsService()
//         setstateForBlogHome(data.data.data)


//     }

//     const dataForSearch = useSelector((c) => {
//         console.log(c.allBlogReducer);
//         return c.allBlogReducer.forSearchType
//     })

//     const [typeValue, setType] = useState("All")

//     const setValueOfTypeInChild = async (value1) => {
//         await setType(value1)
//         // console.log(typeValue, "in parent");
//     }





//     const value = async (typeValue) => {
//         const data = await getAllBlogsService()
//         const data1 = await arrangeByLikesSortLowToHigh()
//         const data2 = await arrangeByLikesSortHighToLowService()
//         const data3 = (await getAllBlogsService()).data.data.sort((a, b) => {
//             return new Date(b.createdAt) - new Date(a.createdAt);
//         })
//         console.log(data3.filter(x => {
//             console.log(x.Description);
//         }), "DAt3");
//         console.log(typeValue, "TYPE VAkye");
//         if (typeValue == "Other" && valuOfRelevance == "All") {
//             await setstateForBlogHome(data.data.data.filter((x) => x.Type == "Other"))
//         } else if (typeValue == "Music" && valuOfRelevance == "All") {
//             await setstateForBlogHome(data.data.data.filter((x) => x.Type == "Music"))
//         } else if (typeValue == "Fitness" && valuOfRelevance == "All") {
//             await setstateForBlogHome(data.data.data.filter((x) => x.Type == "Fitness"))
//         } else if (typeValue == "Food" && valuOfRelevance == "All") {
//             await setstateForBlogHome(data.data.data.filter((x) => x.Type == "Food"))
//         }
//         else if (typeValue == "Travel" && valuOfRelevance == "All") {
//             await setstateForBlogHome(data.data.data.filter((x) => x.Type == "Travel"))
//         }
//         else if (typeValue == "Sports" && valuOfRelevance == "All") {
//             await setstateForBlogHome(data.data.data.filter((x) => x.Type == "Sports"))
//         }


//         else if (valuOfRelevance == "lowToHigh" && typeValue == "Other") {
//             await setstateForBlogHome(data1.data.data.filter((x) => x.Type == "Other"))
//             console.log("ENETEFEYGEe");
//         }
//         else if (valuOfRelevance == "lowToHigh" && typeValue == "Music") {
//             await setstateForBlogHome(data1.data.data.filter((x) => x.Type == "Music"))
//         } else if (valuOfRelevance == "lowToHigh" && typeValue == "Fitness") {
//             await setstateForBlogHome(data1.data.data.filter((x) => x.Type == "Fitness"))
//         } else if (valuOfRelevance == "lowToHigh" && typeValue == "Food") {
//             await setstateForBlogHome(data1.data.data.filter((x) => x.Type == "Food"))
//         } else if (valuOfRelevance == "lowToHigh" && typeValue == "Travel") {
//             await setstateForBlogHome(data1.data.data.filter((x) => x.Type == "Travel"))
//         } else if (valuOfRelevance == "lowToHigh" && typeValue == "Sports") {
//             await setstateForBlogHome(data1.data.data.filter((x) => x.Type == "Sports"))
//         }
//         //highToLow
//         else if (valuOfRelevance == "highToLow" && typeValue == "Other") {
//             await setstateForBlogHome(data2.data.data.filter((x) => x.Type == "Other"))
//         }
//         else if (valuOfRelevance == "highToLow" && typeValue == "Music") {
//             await setstateForBlogHome(data2.data.data.filter((x) => x.Type == "Music"))
//         }
//         else if (valuOfRelevance == "highToLow" && typeValue == "Fitness") {
//             await setstateForBlogHome(data2.data.data.filter((x) => x.Type == "Fitness"))
//         }
//         else if (valuOfRelevance == "highToLow" && typeValue == "Food") {
//             await setstateForBlogHome(data2.data.data.filter((x) => x.Type == "Food"))
//         }
//         else if (valuOfRelevance == "highToLow" && typeValue == "Travel") {
//             await setstateForBlogHome(data2.data.data.filter((x) => x.Type == "Travel"))
//         }
//         else if (valuOfRelevance == "highToLow" && typeValue == "Sports") {
//             await setstateForBlogHome(data2.data.data.filter((x) => x.Type == "Sports"))
//         }
//         else if (valuOfRelevance == "Latest" && typeValue == "Other") {
//             await setstateForBlogHome(data3.filter((x) => x.Type == "Other"))
//         }
//         else if (valuOfRelevance == "Latest" && typeValue == "Music") {
//             await setstateForBlogHome(data3.filter((x) => x.Type == "Music"))
//         }
//         else if (valuOfRelevance == "Latest" && typeValue == "Fitness") {
//             await setstateForBlogHome(data3.filter((x) => x.Type == "Fitness"))
//         }
//         else if (valuOfRelevance == "Latest" && typeValue == "Food") {
//             await setstateForBlogHome(data3.filter((x) => x.Type == "Food"))
//         }
//         else if (valuOfRelevance == "Latest" && typeValue == "Travel") {
//             await setstateForBlogHome(data3.filter((x) => x.Type == "Travel"))
//         }
//         else if (valuOfRelevance == "Latest" && typeValue == "Sports") {
//             await setstateForBlogHome(data3.filter((x) => x.Type == "Sports"))
//         }
//         else if (valuOfRelevance == "Latest") {
//             setstateForBlogHome(data3)
//         }

//         else if (valuOfRelevance == "lowToHigh") {

//             await setstateForBlogHome(data1.data.data)
//         }
//         else if (valuOfRelevance == "highToLow") {

//             await setstateForBlogHome(data2.data.data)
//         }
//         else if (valuOfRelevance == "All") {

//             await setstateForBlogHome(data.data.data)
//         }



//     }



//     const viewPostOnClick = async (id, data, type) => {
//         const response = await viewPostService(id, data)
//         value()

//     }

//     useEffect(() => {
//         getAllBlogsService()
//         initialValue()
//         value()
//     }, [])

//     useEffect(() => {
//         getAllBlogsService()
//         // initialValue()
//         value(valueOfBlogType)
//     }, [valuOfRelevance, valueOfBlogType])



//     return (
//         <>
//             <div className='home-main'>
//                 <div className='home-dash'>
//                     <div style={{ display: 'flex' }}>
//                         <NativeSelectDemo value={value} setValueOfTypeInChild={setValueOfTypeInChild} />
//                         <NativeSelectDemo1 value={value} setValueOfTypeInChild={setValueOfTypeInChild} />
//                     </div>
//                     {stateForBlogHome.map((x) =>
//                         <div key={x._id} onClick={() => {
//                             viewPostOnClick(x._id, x, x.Type)

//                         }}>


//                             <Blog
//                                 obj={x}
//                                 id={x._id}
//                                 value={value}
//                                 Type={x.Type}
//                                 Id={x._id}
//                                 Email={x.Email} date={x.createdAt}
//                                 Title={x.Title}
//                                 Views={x.Views.length}
//                                 Likes={x.Likes}
//                                 Description={x.Description}
//                                 NumberOfLikes={x.Likes.length}
//                             />
//                         </div>

//                     )}
//                 </div>
//             </div>
//         </>


//     )
// }

// export default Home
