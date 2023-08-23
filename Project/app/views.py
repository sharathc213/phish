from django.shortcuts import render
import random
from .models import *
import random
import string

def jaccard_similarity(list1, list2):
    set1 = set(list1)
    set2 = set(list2)
    intersection = len(set1.intersection(set2))
    union = len(set1.union(set2))
    return intersection / union

def predict_voucher_amount(percentage):
    # Ensure the percentage is within the valid range (0-100)
    percentage = max(0, min(percentage, 100))
    
    # Calculate the voucher amount
    max_amount = 2000  # Maximum voucher amount
    voucher_amount = (percentage / 100) * max_amount
    
    return voucher_amount
# Create your views here.
def One(request):
    
    current_page = request.session.get('current_page', None)
    print(current_page)
    if current_page is None:
        request.session['current_page'] = 1
        return render(request, 'One.html',{'page':'one'})
    elif current_page == 1:
        return render(request, 'One.html',{'page':'one'})
    elif current_page == 2:
        return render(request, 'One.html',{'page':'two'})
    elif current_page == 3:
        return render(request, 'One.html',{'page':'three'})
    elif current_page == 4:
        return render(request, 'One.html',{'page':'four'})
    elif current_page == 5:
        return render(request, 'One.html',{'page':'five'})
    elif current_page == 6:
        return render(request, 'One.html',{'page':'six'})
    else:
        return render(request, 'One.html',{'page':'one'})


def Two(request):
    company_list=list(Companyname.objects.all().values())
    return render(request, 'Two.html',{"list":company_list})

def Three(request):
    company_name= request.POST.get('company_name')
    email = request.POST.get('email')
    # Create and save a Company instance


    # if Entry.objects.filter(email=email).count() > 0:
    # # Data exists
    #     return render(request, 'Two.html',{"error":"Email already Registered"})
    # else:
    # Data does not exist

    request.session['email'] = email
    entry = Entry(company_name=company_name, email=email,last_status=3)
    entry.save()

    request.session['current_page'] = 3
    all_words = [
       "onam",
"pookalam",
"sadya",
"vallam kali",
"kathakali",
"pulikali",
"thiruvonam",
"maveli",
"banana leaf",
"payasam",
"kerala",
"flower",
"athapookalam",
"onakkodi",
"thrikkakara appan",
"coconut",
"chundan vallam",
"kaikottikali",
"puli inji"
    ]
    request.session['current_page'] = 5
    random_words = random.sample(all_words, 10)
    request.session['phrase'] = random_words

    return render(request, 'Three.html',{'phrase':random_words})

def Four(request):
    phrase_1 = request.POST.get('phrase_1')
    phrase_2 = request.POST.get('phrase_2')
    phrase_3 = request.POST.get('phrase_3')
    phrase_4 = request.POST.get('phrase_4')
    phrase_5 = request.POST.get('phrase_5')
    phrase_6= request.POST.get('phrase_6')
    phrase_7 = request.POST.get('phrase_7')
    phrase_8 = request.POST.get('phrase_8')
    phrase_9 = request.POST.get('phrase_9')
    phrase_10 = request.POST.get('phrase_10')
    phrase=[phrase_1,phrase_2,phrase_3,phrase_4,phrase_5,phrase_6,phrase_7,phrase_8,phrase_9,phrase_10]
    old_phrase = request.session.get('phrase', [])

    similarity_score = jaccard_similarity(old_phrase, phrase)

    percentage_similarity = similarity_score * 100
    predicted_amount = predict_voucher_amount(percentage_similarity)
    print(f"Jaccard Similarity: {predicted_amount:.2f}%")
    email = request.session.get('email', None)
    user = Entry.objects.get(email=email)
    user.value=round(predicted_amount)
    user.save()
    request.session['per'] = round(predicted_amount)
    request.session['current_page'] = 4

    return render(request, 'Four.html',{"per":round(predicted_amount)})

def loadFour(request):
    per = request.session.get('per', None)
    request.session['current_page'] = 4
    return render(request, 'Four.html',{"per":per})

def Five(request):
    cemail = request.POST.get('cemail')
    name = request.POST.get('name')
    phno = request.POST.get('phno')
    emp_id = request.POST.get('emp_id')
    email = request.session.get('email', None)
    user = Entry.objects.get(email=email)
    user.name=name
    user.cemail=cemail
    user.phone_no=phno
    user.emp_id=emp_id
    user.last_status=5
    
    request.session['current_page'] = 6
    characters = string.ascii_letters + string.digits  
    random_string = ''.join(random.choice(characters) for _ in range(10))
    user.code=random_string
    user.save()
    request.session['cooponcode'] = random_string
    return render(request, 'Five.html',{"code":random_string})

def Six(request):
    code = request.session.get('cooponcode', None)
   
    return render(request, 'six.html',{"code":code})
