This project is an api for rimba frontend [Rimba-clothes](https://github.com/ArielCalisaya/rimba).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3030](http://localhost:3330) to view it in the browser.

The page will reload if you save the edits.<br />
You will also see any lint errors in the console.

## `Routes for API`

```json
{
  "rimba_Api": {
    "userRoutes": {
      "Get_AllUser": "/api/users/all",
      "Get_User": "/api/users/user/:id",
      "Update_User": "/api/users/change/:id",
      "Create_User": "/api/users/create",
      "Delete_User": "/api/users/delete/:id"
    },
    "clothesRoutes": {
      "Show_AllClothes": "/api/clothes/all",
      "Get_ClotheDetail": "/api/clothes/:id",
      "Create_Clothes_Detail": "/api/clothes/new",
      "Change_Clothe_Details": "/api/clothes/edit/:id",
      "Detele_Clothe_Details": "/api/clothes/delete/:id"
    }
  }
}
```
