module State exposing (..)

import Types exposing (..)


init : String -> ( Model, Cmd Msg )
init path =
    ( { message = "Your Elm App is working!"
      , logo = path
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
