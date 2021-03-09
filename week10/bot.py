import requests

token = "1684646069:AAERLRffHqqywfNKvpdSpruanhyusIZzZY4"

method_url = f"https://api.telegram.org/bot{token}"

get_me = method_url + "/getMe"

def get_message():
    mess = method_url + "/getUpdates"
    r = requests.get(mess)
    return r.json()

