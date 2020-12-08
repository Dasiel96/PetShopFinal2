import json

def add(j_obj, new_path):
    for key in j_obj:
        j_obj[key] = f"{new_path}/{j_obj[key]}"

def remove(j_obj, new_path):
    for key in j_obj:
        j_obj[key] = j_obj[key].replace(f"{new_path}/", "")

def main():
    path = "./src/assets/json/site-links.json"
    j_obj = {}
    with open(path, 'r') as f:
        j_obj = json.load(f)

    answer = input("1.) to add 2.) remove: ")
    new_path = input("enter new path: ")

    if answer == "1":
        add(j_obj, new_path)
    else:
        remove(j_obj, new_path)
    
    with open(path, 'w') as f:
        json.dump(j_obj, f)
    

if __name__ == "__main__":
    main()