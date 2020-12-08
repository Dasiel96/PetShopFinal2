import json
import random


def addCatagory(data):
    catagory = input("please enter catagory name: ")
    data[catagory] = []
    return catagory

def cleanTextOfCite(text):
    include_char = True
    clean_text = ""
    for char in text:
        if char == "[":
            include_char = False
        elif char == "]":
            include_char = True
            continue
        
        if include_char:
            clean_text += char
    return clean_text


def multiLineInput(msg):
    print(msg)
    input_txt = ""
    while True:
        line = cleanTextOfCite(input())
        if line != "--/":
            input_txt += f"{line}\n"
        else:
            break
    return input_txt

def addContent(data, key, url):
    content = {}
    ri = lambda: random.randint(0, 9)
    name_key = "name"
    price_key = "price"
    url_key = "url"
    des_key = "des"
    des_short_key = "des-short"
    ref_content_key = "ref"
    ref_img_key = "img-ref"
    img_name_key = "img-name"
    index_key = "index"

    if key is None or input(f"do you want to select another catagory? current is {key}: ").lower() in "yes":
        key = input("select a catagory: ")

    content[name_key] = input("enter name of product: ")
    content[price_key] = f"{ri()}{ri()}{ri()}.{ri()}{ri()}"
    content[des_key] = multiLineInput("enter product description: ")
    content[des_short_key] = input("enter a short summary of product description: ")
    content[ref_content_key] = input("enter url where you got content description: ")
    content[ref_img_key] = input("enter url were you got image: ")
    content[img_name_key] = input("enter file name of image: ")

    if url is None or input(f"select new url? current is {url}: ").lower() in "yes":
        content[url_key] = input("enter image path: ")
        if content[url_key][len(content[url_key])-1] != '/':
            content[url_key] += '/'
    else:
        content[url_key] = url

    content[des_key] = content[des_key][:-1]
    if key in data:
        content[index_key] = len(data[key])
        data[key].append(content)
    else:
        content[index_key] = 0
        data[key] = [content]

    return content[url_key]


def loadJson(data, path):
    with open(path, 'r') as loadfile:
        json_file = json.load(loadfile)
        for key in json_file:
            data[key] = json_file[key]


def saveJson(data, path):
    with open(path, 'w') as saveFile:
        json.dump(data, saveFile)


def main():
    PATH = "./src/assets/json/content.json"
    JSON_DATA = {}

    catagory_key = None
    url = None

    loadJson(JSON_DATA, PATH)
    edit_json = "yes"

    while edit_json.lower() in "yes":
        edit_json = input("""
        How would you wish to edit?
        1.) add catagory?
        2.) add content?
        3.) exit
        """)
        if edit_json == "1":
            catagory_key = addCatagory(JSON_DATA)
            edit_json = "yes"
            saveJson(JSON_DATA, PATH)
        elif edit_json == "2":
            url = addContent(JSON_DATA, catagory_key, url)
            edit_json = "yes"
            saveJson(JSON_DATA, PATH)
        else:
            edit_json = "no"
            
    saveJson(JSON_DATA, PATH)



if __name__ == "__main__":
    main()
