#import requests

# def get_images(requests):
#    url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_yajT9ALrHEvFPItffUkUcnZG1VIBnIRN9vtSu7jJSmILcTqqFmlfBqBkuvL0MWQ9'
#    r = requests.get(url, headers={'Authorization':'Bearer %s' % 'live_yajT9ALrHEvFPItffUkUcnZG1VIBnIRN9vtSu7jJSmILcTqqFmlfBqBkuvL0MWQ9 '})
#    images = r.json()
#    image_list = []
#    for i in range(len(images['images'])):
#        image_list.append(images['images'][i])
#    return image_list