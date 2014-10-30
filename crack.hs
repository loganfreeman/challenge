module Main where

import Text.Regex.Posix
import Data.List.Utils (replace)
import Control.Monad (when)

main :: IO ()
main = do
    ws <- lines `fmap` readFile "enable1.txt"
    mapM_ printIfIdeal ws

printIfIdeal :: String -> IO ()
printIfIdeal w = when (w =~ "at[^e]" :: Bool) $ putStrLn (replace "at" "@" w ++ " : " ++ w)