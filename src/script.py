
def add_e_to_test(file_name):
    with open(file_name, 'r') as file:
        file_content = file.read()

    # Find and replace 'TEST' with the modified version
    modified_content = file_content.replace('className=\'', 'className=\'AB')

    with open(file_name, 'w') as file:
        file.write(modified_content)

def add_E_after_period_in_file(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    with open(file_path, 'w') as file:
        for line in lines:
            if '.' in line and line.startswith('.'):
                line = line.replace('.','.AB')
            file.write(line)

add_E_after_period_in_file('/Users/joker/Downloads/ecc7ebcc-5939-4045-8feb-7c15e2daa2f8/src/Origines/index.css')
add_e_to_test('/Users/joker/Downloads/ecc7ebcc-5939-4045-8feb-7c15e2daa2f8/src/Origines/index.tsx')


