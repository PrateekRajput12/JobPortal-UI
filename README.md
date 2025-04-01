# Start Project

# 1 NavBar
- NavBar Created 

# 2 Router + NavBar
 - Router setup using createBrowser Router
 - functionality using Link for signup and login is created in NavBar  

# 3 Sign & Login 
- authentication done using frontend
- with changeEventHandler and changeFileHandler and submitHandler
- i used useState in ({1:"",2:""}) this way 
- and created form data and in changeEventHandler  setInput({...input,})
- created formData and headers:()
- # FormData 
  - FormData is a built-in JavaScript object that allows you to construct and send key-value pairs, including files, to a server using multipart/form-data.
  # headers()
  - When submitting a form that includes files (like images, PDFs, or videos), a normal application/json or application/x-www-form-urlencoded request cannot handle file uploads. multipart/form-data allows sending both text fields and files as separate parts within the same request.

- login signup done using api and multer integrated in backend for uploading profile picture 
- because without it it was showing error and data was not being shared to the backend 
thats why multer is added

# 4 Redux store
- redux store setup 
- authslice for loading created
- loading is created

# 5 Browse ,Filter Card,Job 
- all these component created
- with normal css 
- and dynamic raw data

# 6 User Store created
 - User Store in auth store created
 - Profile , Applied Job Page Created
 - NavBar fetching User using useSelector done

# 7 Job Description Created
- Job Description Created 

# 8 Profile Edit 
 - Created 
 - dynamic content and storing ipdated data in store createdwwwwwww
 - for resume next step is to build cloudinary

# 9 Cloudinary Setup
- working file uploading document on cloudinary but 
- not showing showing that failed to load 
- i will check it tommorrow


# 10 Logout
- Logout created succesfully 
- and cleared user store after logout api called 
using dispatch(setUser(null))
- profile images show integrated

# 11 GETALLJOBS 
- getAll jobs hook created yo fetch jobs
- then we used this function at homepage 
- then for fetching data on latest job page 
- we used selector 
- jobSlice is also created 

# 12 GET SINGLE JOB
- created and fetched data 
- created description page 
- added days ago 

# 13 isApplied Button
- isApplied Button is created 


# 14 isApplied Button + Persist Store
- store is persisted 
- isApplied done using some()

# 15 Admin navBar 
- navbar for admin is created 
- profile show for admin as required is removed


# 16 Create Company && company Setup and COmpany Slice
- all of thses things created

# 17 Get All Companies && Get COmpanies by id
- DOne
- and search filter added

# 18 Allmost all companies work done
- working on job at next

# 19 Admin Jobs
- fetch admin jobs 
- search Jobs By role and name Done ✅

# 20 Post Jobs
- post jobs created 
- applied job button fixed
- admin jobs table created