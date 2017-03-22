module View exposing (..)

import Types exposing (..)
import Html exposing (Html, text, div, img)
import Html.Attributes exposing (src)


view : Model -> Html Msg
view model =
    div []
        [ img [ src model.logo ] []
        , div [] [ text model.message ]
        ]
