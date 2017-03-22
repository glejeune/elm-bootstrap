module Main exposing (..)

import Types exposing (..)
import State exposing (..)
import View exposing (..)
import Html exposing (programWithFlags)


main : Program String Model Msg
main =
    programWithFlags
        { view = view
        , init = init
        , update = update
        , subscriptions = subscriptions
        }
