class MedicalPlatform {
    constructor() {
        // Data
        this.currentUser = null;
        this.selectedRole = null;
        this.appointments = [];
        this.map = null;
        this.userLocation = null;
        
        // Chat Data
        this.chatMessages = [
            { id: 1, sender: 'Dr. Adams', text: 'Hello, how can I help you?', time: '10:30 AM', chatId: 'doc1' },
            { id: 2, sender: 'Alex', text: 'I have fever since 2 days', time: '10:32 AM', chatId: 'patient1' },
            { id: 3, sender: 'Dr. Adams', text: 'Please come for checkup', time: '10:33 AM', chatId: 'doc1' }
        ];
        
        this.currentChatId = 'doc1';
        
        // Video call variables
        this.localStream = null;
        this.remoteStream = null;
        this.peer = null;
        this.isAudioMuted = false;
        this.isVideoPaused = false;
        this.isScreenSharing = false;
        
        // ========== MEDICAL STORE DATA ==========
        this.medicines = [
            {
                id: 1,
                name: 'Paracetamol 500mg',
                price: 45,
                mrp: 55,
                discount: '18%',
                company: 'Cipla',
                type: 'Tablet',
                quantity: '10 tablets',
                prescription: false,
                inStock: true,
                expiry: '12/2026',
                category: 'Pain Relief',
                image: '💊'
            },
            {
                id: 2,
                name: 'Azithromycin 500mg',
                price: 120,
                mrp: 150,
                discount: '20%',
                company: 'Pfizer',
                type: 'Tablet',
                quantity: '6 tablets',
                prescription: true,
                inStock: true,
                expiry: '08/2026',
                category: 'Antibiotic',
                image: '💊'
            },
            {
                id: 3,
                name: 'Vitamin C 500mg',
                price: 180,
                mrp: 220,
                discount: '18%',
                company: 'Abbott',
                type: 'Tablet',
                quantity: '15 tablets',
                prescription: false,
                inStock: true,
                expiry: '03/2027',
                category: 'Vitamins',
                image: '💊'
            },
            {
                id: 4,
                name: 'Amoxicillin 250mg',
                price: 85,
                mrp: 100,
                discount: '15%',
                company: 'Sun Pharma',
                type: 'Capsule',
                quantity: '10 capsules',
                prescription: true,
                inStock: true,
                expiry: '10/2026',
                category: 'Antibiotic',
                image: '💊'
            },
            {
                id: 5,
                name: 'Cetirizine 10mg',
                price: 35,
                mrp: 45,
                discount: '22%',
                company: 'Dr. Reddy',
                type: 'Tablet',
                quantity: '10 tablets',
                prescription: false,
                inStock: true,
                expiry: '05/2027',
                category: 'Allergy',
                image: '💊'
            },
            {
                id: 6,
                name: 'Omeprazole 20mg',
                price: 95,
                mrp: 120,
                discount: '21%',
                company: 'Lupin',
                type: 'Capsule',
                quantity: '15 capsules',
                prescription: true,
                inStock: true,
                expiry: '09/2026',
                category: 'Gastric',
                image: '💊'
            },
            {
                id: 7,
                name: 'Dolo 650mg',
                price: 55,
                mrp: 70,
                discount: '21%',
                company: 'Micro Labs',
                type: 'Tablet',
                quantity: '15 tablets',
                prescription: false,
                inStock: true,
                expiry: '11/2026',
                category: 'Pain Relief',
                image: '💊'
            },
            {
                id: 8,
                name: 'Crocin Advance',
                price: 40,
                mrp: 50,
                discount: '20%',
                company: 'GSK',
                type: 'Tablet',
                quantity: '10 tablets',
                prescription: false,
                inStock: true,
                expiry: '02/2027',
                category: 'Pain Relief',
                image: '💊'
            },
            {
                id: 9,
                name: 'Metformin 500mg',
                price: 65,
                mrp: 80,
                discount: '19%',
                company: 'USV',
                type: 'Tablet',
                quantity: '15 tablets',
                prescription: true,
                inStock: true,
                expiry: '07/2026',
                category: 'Diabetes',
                image: '💊'
            },
            {
                id: 10,
                name: 'Amlodipine 5mg',
                price: 75,
                mrp: 95,
                discount: '21%',
                company: 'Torrent',
                type: 'Tablet',
                quantity: '15 tablets',
                prescription: true,
                inStock: true,
                expiry: '04/2027',
                category: 'BP',
                image: '💊'
            }
        ];

        // Medical Stores Data
        this.medicalStores = [
            {
                id: 1,
                name: 'Apollo Pharmacy',
                address: 'FC Road, Shivajinagar, Pune',
                distance: 1.2,
                phone: '020-12345678',
                open: '24x7',
                rating: 4.5,
                delivery: true,
                deliveryTime: '30 min',
                lat: 18.5314,
                lng: 73.8567
            },
            {
                id: 2,
                name: 'MedPlus',
                address: 'JM Road, Deccan, Pune',
                distance: 1.8,
                phone: '020-87654321',
                open: '8 AM - 11 PM',
                rating: 4.3,
                delivery: true,
                deliveryTime: '45 min',
                lat: 18.5184,
                lng: 73.8567
            },
            {
                id: 3,
                name: 'Wellness Forever',
                address: 'Law College Road, Pune',
                distance: 2.5,
                phone: '020-11223344',
                open: '24x7',
                rating: 4.7,
                delivery: true,
                deliveryTime: '40 min',
                lat: 18.5084,
                lng: 73.8367
            },
            {
                id: 4,
                name: 'Guardian Pharmacy',
                address: 'Koregaon Park, Pune',
                distance: 3.1,
                phone: '020-99887766',
                open: '9 AM - 10 PM',
                rating: 4.2,
                delivery: true,
                deliveryTime: '50 min',
                lat: 18.5364,
                lng: 73.8967
            }
        ];

        // Order Data
        this.cart = [];
        this.orders = [];
        this.prescriptionUploaded = false;
        
        // Load saved data
        this.loadData();
        this.loadChatData();
        this.loadCartData();
        this.loadOrdersData();
        
        // Start
        this.cacheElements();
        this.bindEvents();
        this.initTheme();
        
        // Make app globally accessible
        window.app = this;
    }

    cacheElements() {
        // Get all HTML elements
        this.body = document.body;
        this.authSection = document.getElementById('authSection');
        this.doctorDash = document.getElementById('doctorDashboard');
        this.patientDash = document.getElementById('patientDashboard');
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        this.themeText = document.getElementById('themeText');
        this.globalUserName = document.getElementById('globalUserName');
        
        // Login
        this.loginAsDoctor = document.getElementById('loginAsDoctorBtn');
        this.loginAsPatient = document.getElementById('loginAsPatientBtn');
        this.loginForm = document.getElementById('loginForm');
        this.loginEmail = document.getElementById('loginEmail');
        this.loginPassword = document.getElementById('loginPassword');
        
        // Patient
        this.patientName = document.getElementById('patientName');
        this.doctorSelect = document.getElementById('doctorSelect');
        this.appointmentDate = document.getElementById('appointmentDate');
        this.bookBtn = document.getElementById('bookAppointmentBtn');
        this.bookingMessage = document.getElementById('bookingMessage');
        this.patientApptList = document.getElementById('patientAppointmentList');
        this.emergencyBtn = document.getElementById('patientEmergencyBtn');
        
        // Doctor
        this.doctorApptList = document.getElementById('doctorAppointmentList');
        this.pendingCount = document.getElementById('pendingCount');
        this.chatMessagesDiv = document.getElementById('chatMessages');
        this.chatInput = document.getElementById('chatInput');
        this.sendChatBtn = document.getElementById('sendChatBtn');
        this.prescriptionUpload = document.getElementById('prescriptionUpload');
        
        // Common
        this.emergencyFloat = document.getElementById('emergencyFloat');
        this.emergencyOverlay = document.getElementById('emergencyOverlay');
        this.dismissEmergency = document.getElementById('dismissEmergency');
        
        // Map
        this.findHospital = document.getElementById('findNearestHospital');
        this.navigateBtn = document.getElementById('navigateToHospital');
        this.hospitalDistance = document.getElementById('hospitalDistance');
    }

    bindEvents() {
        // Theme
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Login
        this.loginAsDoctor.addEventListener('click', () => this.selectRole('doctor'));
        this.loginAsPatient.addEventListener('click', () => this.selectRole('patient'));
        this.loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        
        // Patient
        if(this.bookBtn) {
            this.bookBtn.addEventListener('click', () => this.bookAppointment());
        }
        if(this.emergencyBtn) {
            this.emergencyBtn.addEventListener('click', () => this.triggerEmergency());
        }
        
        // Doctor Chat
        if(this.sendChatBtn) {
            this.sendChatBtn.addEventListener('click', () => this.sendChatMessage());
        }
        if(this.chatInput) {
            this.chatInput.addEventListener('keypress', (e) => {
                if(e.key === 'Enter') this.sendChatMessage();
            });
        }
        
        // Patient Chat
        let patientSendChat = document.getElementById('patientSendChatBtn');
        if(patientSendChat) {
            patientSendChat.addEventListener('click', () => this.sendPatientChatMessage());
        }
        
        let patientChatInput = document.getElementById('patientChatInput');
        if(patientChatInput) {
            patientChatInput.addEventListener('keypress', (e) => {
                if(e.key === 'Enter') this.sendPatientChatMessage();
            });
        }
        
        if(this.prescriptionUpload) {
            this.prescriptionUpload.addEventListener('click', () => this.uploadPrescription());
        }
        
        // Common Emergency
        this.emergencyFloat.addEventListener('click', () => this.triggerEmergency());
        this.dismissEmergency.addEventListener('click', () => this.dismissEmergencyFunc());
        
        // Map
        if(this.findHospital) {
            this.findHospital.addEventListener('click', () => this.findNearestHospital());
        }
        if(this.navigateBtn) {
            this.navigateBtn.addEventListener('click', () => this.navigateToHospital());
        }

        // Video Call
        this.initVideoCall();
    }

    // ========== THEME FUNCTIONS ==========
    toggleTheme() {
        this.body.classList.toggle('light-mode');
        let isLight = this.body.classList.contains('light-mode');
        this.themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        this.themeText.innerText = isLight ? 'Light mode' : 'Dark mode';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }

    initTheme() {
        let saved = localStorage.getItem('theme');
        if(saved === 'light') {
            this.body.classList.add('light-mode');
            this.themeIcon.className = 'fas fa-sun';
            this.themeText.innerText = 'Light mode';
        }
    }

    // ========== LOGIN FUNCTIONS ==========
    selectRole(role) {
        this.selectedRole = role;
        this.loginEmail.value = role === 'doctor' ? 'doctor@medicore.com' : 'patient@medicore.com';
        this.loginPassword.value = 'password123';
    }

    handleLogin(e) {
        e.preventDefault();
        if(!this.selectedRole) {
            alert('Please select Doctor or Patient');
            return;
        }
        
        this.currentUser = this.selectedRole;
        
        if(this.currentUser === 'patient') {
            this.showPatientDashboard();
        } else if(this.currentUser === 'doctor') {
            this.showDoctorDashboard();
        }
    }

    // ========== PATIENT DASHBOARD ==========
    showPatientDashboard() {
        this.authSection.style.display = 'none';
        this.doctorDash.style.display = 'none';
        this.patientDash.style.display = 'block';
        if(this.medicalStoreSection) this.medicalStoreSection.style.display = 'none';
        if(this.globalUserName) this.globalUserName.innerText = 'Alex (Patient)';
        if(this.patientName) this.patientName.innerText = 'Alex';
        
        this.renderPatientAppointments();
        this.initMap();
        this.renderPatientChat();
        this.addMedicalStoreButton();
        
        if(this.startVideoCallBtn) {
            this.startVideoCallBtn.style.display = 'block';
        }
    }

    // ========== DOCTOR DASHBOARD ==========
    showDoctorDashboard() {
        this.authSection.style.display = 'none';
        this.doctorDash.style.display = 'block';
        this.patientDash.style.display = 'none';
        if(this.medicalStoreSection) this.medicalStoreSection.style.display = 'none';
        if(this.globalUserName) this.globalUserName.innerText = 'Dr. Sarah';
        
        this.renderDoctorAppointments();
        this.renderChatMessages();
        
        if(this.startVideoCallBtn) {
            this.startVideoCallBtn.style.display = 'block';
        }
    }

    // ========== APPOINTMENT FUNCTIONS ==========
    bookAppointment() {
        let doctor = this.doctorSelect.value;
        let date = this.appointmentDate.value;
        
        if(!date) {
            this.bookingMessage.innerText = 'Please select a date!';
            this.bookingMessage.style.color = '#ef4444';
            return;
        }

        let newAppointment = {
            id: Date.now(),
            patient: 'Alex',
            doctor: doctor,
            date: date,
            status: 'pending'
        };

        this.appointments.push(newAppointment);
        this.saveData();
        
        this.bookingMessage.innerText = '✅ Appointment booked successfully!';
        this.bookingMessage.style.color = '#22c55e';
        
        this.renderPatientAppointments();
        this.appointmentDate.value = '';
    }

    renderPatientAppointments() {
        if(!this.patientApptList) return;
        
        let patientApps = this.appointments.filter(a => a.patient === 'Alex');
        
        if(patientApps.length === 0) {
            this.patientApptList.innerHTML = '<div class="appointment-card">No appointments yet</div>';
            return;
        }

        let html = '';
        patientApps.forEach(app => {
            html += `
                <div class="appointment-card">
                    <div>
                        <i class="fas fa-user-md"></i> ${app.doctor}
                        <br><small>${app.date}</small>
                    </div>
                    <div style="color: ${app.status === 'approved' ? '#22c55e' : '#eab308'};">
                        ${app.status.toUpperCase()}
                    </div>
                </div>
            `;
        });
        
        this.patientApptList.innerHTML = html;
    }

    renderDoctorAppointments() {
        if(!this.doctorApptList) return;
        
        let pendingApps = this.appointments.filter(a => a.status === 'pending');
        
        if(this.pendingCount) {
            this.pendingCount.innerText = pendingApps.length;
        }

        if(pendingApps.length === 0) {
            this.doctorApptList.innerHTML = '<div class="appointment-card">✨ No pending appointments</div>';
            return;
        }

        let html = '';
        pendingApps.forEach(app => {
            html += `
                <div class="appointment-card" data-id="${app.id}">
                    <div>
                        <strong>${app.patient}</strong> with ${app.doctor}
                        <br><small>${app.date}</small>
                    </div>
                    <button class="btn approve-btn" data-id="${app.id}">
                        ✅ Approve
                    </button>
                </div>
            `;
        });
        
        this.doctorApptList.innerHTML = html;
        
        document.querySelectorAll('.approve-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                let id = parseInt(e.target.dataset.id);
                this.approveAppointment(id);
            });
        });
    }

    approveAppointment(id) {
        this.appointments = this.appointments.map(a => 
            a.id === id ? {...a, status: 'approved'} : a
        );
        
        alert('Appointment approved!');
        
        this.saveData();
        this.renderDoctorAppointments();
        this.renderPatientAppointments();
    }

    // ========== CHAT FUNCTIONS ==========
    renderPatientChat() {
        let patientChatDiv = document.getElementById('patientChatMessages');
        if(!patientChatDiv) return;
        
        let patientMessages = this.chatMessages.filter(m => 
            m.sender === 'Alex' || m.sender === 'Dr. Adams'
        );
        
        let html = '';
        patientMessages.forEach(msg => {
            let isMe = msg.sender === 'Alex';
            html += `
                <div class="chat-bubble ${isMe ? 'me' : ''}">
                    <strong>${msg.sender}:</strong> ${msg.text}
                    <small style="display:block; font-size:0.7rem;">${msg.time}</small>
                </div>
            `;
        });
        
        patientChatDiv.innerHTML = html;
        patientChatDiv.scrollTop = patientChatDiv.scrollHeight;
    }

    sendPatientChatMessage() {
        let input = document.getElementById('patientChatInput');
        if(!input || !input.value.trim()) return;
        
        let message = input.value.trim();
        let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let newMsg = {
            id: Date.now(),
            sender: 'Alex',
            text: message,
            time: time,
            chatId: 'patient1'
        };
        
        this.chatMessages.push(newMsg);
        this.saveChatData();
        
        this.renderPatientChat();
        input.value = '';
        
        setTimeout(() => {
            let replyMsg = {
                id: Date.now() + 1,
                sender: 'Dr. Adams',
                text: 'Thanks for your message. I will check and reply soon.',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                chatId: 'doc1'
            };
            this.chatMessages.push(replyMsg);
            this.saveChatData();
            this.renderPatientChat();
            
            if(this.currentUser === 'doctor') {
                this.renderChatMessages();
            }
        }, 2000);
    }

    renderChatMessages() {
        if(!this.chatMessagesDiv) return;
        
        let html = '';
        this.chatMessages.forEach(msg => {
            let isMe = msg.sender === 'Dr. Adams' || msg.sender === 'me';
            html += `
                <div class="chat-bubble ${isMe ? 'me' : ''}">
                    <strong>${msg.sender}:</strong> ${msg.text}
                    <small style="display:block; font-size:0.7rem;">${msg.time}</small>
                </div>
            `;
        });
        
        this.chatMessagesDiv.innerHTML = html;
        this.chatMessagesDiv.scrollTop = this.chatMessagesDiv.scrollHeight;
    }

    sendChatMessage() {
        if(!this.chatInput || !this.chatInput.value.trim()) return;
        
        let message = this.chatInput.value.trim();
        let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        let newMsg = {
            id: Date.now(),
            sender: 'Dr. Adams',
            text: message,
            time: time,
            chatId: 'doc1'
        };
        
        this.chatMessages.push(newMsg);
        this.saveChatData();
        
        this.renderChatMessages();
        this.chatInput.value = '';
    }

    uploadPrescription() {
        alert('📄 Upload prescription feature coming soon!');
    }

    // ========== MAP FUNCTIONS ==========
    initMap() {
        if(this.map) {
            this.map.remove();
            this.map = null;
        }

        let mapContainer = document.getElementById('emergencyMap');
        if(!mapContainer) return;
        
        mapContainer.innerHTML = '';
        
        if(this.hospitalDistance) {
            this.hospitalDistance.innerHTML = '📍 Getting your location...';
        }
        
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let lat = position.coords.latitude;
                    let lng = position.coords.longitude;
                    this.userLocation = { lat, lng };
                    
                    if(this.hospitalDistance) {
                        this.hospitalDistance.innerHTML = `📍 Your location found!`;
                    }
                    
                    this.createMap(lat, lng);
                    this.findNearbyHospitals(lat, lng);
                },
                (error) => {
                    console.log("Location error:", error);
                    
                    if(this.hospitalDistance) {
                        this.hospitalDistance.innerHTML = `📍 Using Pune location`;
                    }
                    
                    this.createMap(18.5204, 73.8567);
                    this.findNearbyHospitals(18.5204, 73.8567);
                }
            );
        } else {
            if(this.hospitalDistance) {
                this.hospitalDistance.innerHTML = `📍 Using Pune location`;
            }
            this.createMap(18.5204, 73.8567);
            this.findNearbyHospitals(18.5204, 73.8567);
        }
    }

    createMap(lat, lng) {
        try {
            this.map = L.map('emergencyMap').setView([lat, lng], 14);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap'
            }).addTo(this.map);

            L.marker([lat, lng], {
                icon: L.divIcon({
                    className: 'custom-div-icon',
                    html: '<div style="background-color: #3b82f6; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white;"></div>',
                    iconSize: [20, 20],
                    popupAnchor: [0, -10]
                })
            })
            .addTo(this.map)
            .bindPopup(`
                <b>📍 Your Location</b><br>
                Lat: ${lat.toFixed(4)}<br>
                Lng: ${lng.toFixed(4)}
            `)
            .openPopup();
            
            setTimeout(() => {
                if(this.map) this.map.invalidateSize();
            }, 200);
            
        } catch(error) {
            console.error("Map error:", error);
        }
    }

    findNearbyHospitals(lat, lng) {
        let hospitals = [
            {
                name: "Sahyadri Hospital",
                lat: 18.5124, lng: 73.8567,
                phone: "020-24456789",
                address: "Bhandarkar Road, Deccan",
                type: "Multi-specialty",
                emergency: "24x7",
                rating: 4.5
            },
            {
                name: "Jehangir Hospital",
                lat: 18.5254, lng: 73.8747,
                phone: "020-26055100",
                address: "Sassoon Road, Camp",
                type: "Multi-specialty",
                emergency: "24x7",
                rating: 4.3
            },
            {
                name: "KEM Hospital",
                lat: 18.5264, lng: 73.8667,
                phone: "020-66037300",
                address: "Rasta Peth, Pune",
                type: "Government",
                emergency: "24x7",
                rating: 4.0
            },
            {
                name: "Ruby Hall Clinic",
                lat: 18.5314, lng: 73.8737,
                phone: "020-26163391",
                address: "Sassoon Road, Camp",
                type: "Multi-specialty",
                emergency: "24x7",
                rating: 4.4
            },
            {
                name: "Sancheti Hospital",
                lat: 18.5154, lng: 73.8567,
                phone: "020-66065000",
                address: "Shivajinagar",
                type: "Orthopedic",
                emergency: "24x7",
                rating: 4.2
            }
        ];
        
        hospitals.forEach(h => {
            h.distance = this.calculateDistance(lat, lng, h.lat, h.lng);
        });
        
        let nearest = hospitals.sort((a, b) => a.distance - b.distance);
        
        nearest.forEach((hospital, index) => {
            let color = index === 0 ? '#22c55e' : '#ef4444';
            
            L.marker([hospital.lat, hospital.lng], {
                icon: L.divIcon({
                    className: 'hospital-div-icon',
                    html: `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
                    iconSize: [16, 16]
                })
            })
            .addTo(this.map)
            .bindPopup(`
                <div style="min-width: 200px;">
                    <b>🏥 ${hospital.name}</b><br>
                    <span style="color: #666;">${hospital.type}</span><br>
                    📍 ${hospital.address}<br>
                    📞 ${hospital.phone}<br>
                    🚑 ${hospital.emergency}<br>
                    ⭐ ${hospital.rating}/5<br>
                    <b>🚶 ${hospital.distance.toFixed(1)} km away</b><br>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=${hospital.lat},${hospital.lng}" target="_blank" style="color: #3b82f6;">➡️ Get Directions</a>
                </div>
            `);
        });
        
        if(nearest.length > 0 && this.hospitalDistance) {
            let nearestHospital = nearest[0];
            this.hospitalDistance.innerHTML = `
                🏥 <b>${nearestHospital.name}</b> - ${nearestHospital.distance.toFixed(1)} km away<br>
                <small>📞 ${nearestHospital.phone}</small>
            `;
        }
        
        this.showHospitalList(nearest);
    }

    showHospitalList(hospitals) {
        let container = document.getElementById('hospitalListContainer');
        if(!container) return;
        
        if(!hospitals || hospitals.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 2rem;">No hospitals found</div>';
            return;
        }
        
        let html = '';
        hospitals.forEach((h, index) => {
            let medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏥';
            let distance = h.distance ? h.distance.toFixed(1) : '?';
            
            html += `
                <div class="hospital-item" onclick="window.app.focusHospital(${h.lat}, ${h.lng})">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <b>${medal} ${h.name}</b><br>
                            <small>📍 ${h.address || 'Pune'}</small><br>
                            <small>📞 ${h.phone || 'N/A'}</small>
                        </div>
                        <div style="text-align: right;">
                            <b style="color: ${index === 0 ? '#22c55e' : '#ef4444'};">${distance} km</b><br>
                            <small>${h.rating || '4.5'} ⭐</small>
                        </div>
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    calculateDistance(lat1, lon1, lat2, lon2) {
        let R = 6371;
        let dLat = (lat2 - lat1) * Math.PI / 180;
        let dLon = (lon2 - lon1) * Math.PI / 180;
        let a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    focusHospital(lat, lng) {
        if(this.map) {
            this.map.setView([lat, lng], 16);
        }
    }

    findNearestHospital() {
        if(this.userLocation) {
            this.map.setView([this.userLocation.lat, this.userLocation.lng], 14);
            this.findNearbyHospitals(this.userLocation.lat, this.userLocation.lng);
        } else {
            alert('Please enable location first');
        }
    }

    navigateToHospital() {
        if(this.userLocation) {
            let url = `https://www.google.com/maps/dir/${this.userLocation.lat},${this.userLocation.lng}/hospital`;
            window.open(url, '_blank');
        } else {
            alert('Please enable location first');
        }
    }

    // ========== VIDEO CALL FUNCTIONS ==========
    initVideoCall() {
        this.videoModal = document.getElementById('videoCallModal');
        this.localVideo = document.getElementById('localVideo');
        this.remoteVideo = document.getElementById('remoteVideo');
        this.callStatus = document.getElementById('callStatus');
        this.startVideoCallBtn = document.getElementById('startVideoCallBtn');
        this.closeVideoModal = document.getElementById('closeVideoModal');
        
        this.muteAudioBtn = document.getElementById('muteAudioBtn');
        this.pauseVideoBtn = document.getElementById('pauseVideoBtn');
        this.screenShareBtn = document.getElementById('screenShareBtn');
        this.fullScreenBtn = document.getElementById('fullScreenBtn');
        this.endCallBtn = document.getElementById('endCallBtn');
        
        if(this.startVideoCallBtn) {
            this.startVideoCallBtn.addEventListener('click', () => this.startVideoCall());
        }
        
        if(this.closeVideoModal) {
            this.closeVideoModal.addEventListener('click', () => this.endVideoCall());
        }
        
        if(this.muteAudioBtn) {
            this.muteAudioBtn.addEventListener('click', () => this.toggleAudio());
        }
        
        if(this.pauseVideoBtn) {
            this.pauseVideoBtn.addEventListener('click', () => this.toggleVideo());
        }
        
        if(this.screenShareBtn) {
            this.screenShareBtn.addEventListener('click', () => this.toggleScreenShare());
        }
        
        if(this.fullScreenBtn) {
            this.fullScreenBtn.addEventListener('click', () => this.toggleFullScreen());
        }
        
        if(this.endCallBtn) {
            this.endCallBtn.addEventListener('click', () => this.endVideoCall());
        }
    }

    async startVideoCall() {
        try {
            this.videoModal.style.display = 'flex';
            this.updateCallStatus('Requesting camera and microphone...');
            
            this.localStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });
            
            if(this.localVideo) {
                this.localVideo.srcObject = this.localStream;
            }
            
            this.updateCallStatus('Connected! You can now talk.');
            
            this.createPeerConnection();
            
            this.showNotification('📹 Video call started', 'success');
            
        } catch(error) {
            console.error('Video call error:', error);
            this.updateCallStatus('Error: Could not access camera/microphone');
            this.showNotification('❌ Camera access failed', 'error');
        }
    }

    createPeerConnection() {
        this.peer = new SimplePeer({
            initiator: true,
            stream: this.localStream,
            trickle: false
        });
        
        this.peer.on('signal', (data) => {
            console.log('Signal data:', data);
            this.updateCallStatus('Connecting...');
        });
        
        this.peer.on('connect', () => {
            console.log('Peer connected!');
            this.updateCallStatus('Connected!');
        });
        
        this.peer.on('stream', (stream) => {
            if(this.remoteVideo) {
                this.remoteVideo.srcObject = stream;
            }
            this.updateCallStatus('Connected - Ready to talk');
        });
        
        this.peer.on('error', (err) => {
            console.error('Peer error:', err);
            this.updateCallStatus('Connection error');
        });
        
        this.peer.on('close', () => {
            console.log('Peer closed');
            this.endVideoCall();
        });
    }

    toggleAudio() {
        if(this.localStream) {
            const audioTrack = this.localStream.getAudioTracks()[0];
            if(audioTrack) {
                this.isAudioMuted = !this.isAudioMuted;
                audioTrack.enabled = !this.isAudioMuted;
                
                if(this.muteAudioBtn) {
                    this.muteAudioBtn.innerHTML = this.isAudioMuted ? 
                        '<i class="fas fa-microphone-slash"></i>' : 
                        '<i class="fas fa-microphone"></i>';
                }
            }
        }
    }

    toggleVideo() {
        if(this.localStream) {
            const videoTrack = this.localStream.getVideoTracks()[0];
            if(videoTrack) {
                this.isVideoPaused = !this.isVideoPaused;
                videoTrack.enabled = !this.isVideoPaused;
                
                if(this.pauseVideoBtn) {
                    this.pauseVideoBtn.innerHTML = this.isVideoPaused ? 
                        '<i class="fas fa-video-slash"></i>' : 
                        '<i class="fas fa-video"></i>';
                }
            }
        }
    }

    async toggleScreenShare() {
        try {
            if(!this.isScreenSharing) {
                const screenStream = await navigator.mediaDevices.getDisplayMedia({
                    video: true,
                    audio: true
                });
                
                const videoTrack = screenStream.getVideoTracks()[0];
                const sender = this.peer.getSenders().find(s => s.track.kind === 'video');
                if(sender) {
                    sender.replaceTrack(videoTrack);
                }
                
                if(this.localVideo) {
                    this.localVideo.srcObject = screenStream;
                }
                
                this.isScreenSharing = true;
                this.screenShareBtn.innerHTML = '<i class="fas fa-stop"></i>';
                
                videoTrack.onended = () => {
                    this.stopScreenShare();
                };
                
            } else {
                this.stopScreenShare();
            }
        } catch(error) {
            console.error('Screen share error:', error);
        }
    }

    stopScreenShare() {
        if(this.localStream) {
            if(this.localVideo) {
                this.localVideo.srcObject = this.localStream;
            }
            
            const videoTrack = this.localStream.getVideoTracks()[0];
            const sender = this.peer.getSenders().find(s => s.track.kind === 'video');
            if(sender) {
                sender.replaceTrack(videoTrack);
            }
        }
        
        this.isScreenSharing = false;
        this.screenShareBtn.innerHTML = '<i class="fas fa-desktop"></i>';
    }

    toggleFullScreen() {
        if(!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            this.fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            if(document.exitFullscreen) {
                document.exitFullscreen();
                this.fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            }
        }
    }

    updateCallStatus(message) {
        if(this.callStatus) {
            this.callStatus.innerHTML = message;
        }
    }

    endVideoCall() {
        if(this.localStream) {
            this.localStream.getTracks().forEach(track => track.stop());
        }
        
        if(this.peer) {
            this.peer.destroy();
        }
        
        if(this.videoModal) {
            this.videoModal.style.display = 'none';
        }
        
        if(this.localVideo) {
            this.localVideo.srcObject = null;
        }
        if(this.remoteVideo) {
            this.remoteVideo.srcObject = null;
        }
        
        this.isAudioMuted = false;
        this.isVideoPaused = false;
        this.isScreenSharing = false;
        
        this.showNotification('📹 Video call ended', 'info');
    }

    // ========== MEDICAL STORE FUNCTIONS ==========
    createMedicalStoreUI() {
        if(document.getElementById('medicalStoreSection')) {
            this.medicalStoreSection.style.display = 'block';
            this.showStoreTab('medicines');
            return;
        }
        
        const storeSection = document.createElement('div');
        storeSection.id = 'medicalStoreSection';
        storeSection.className = 'dashboard';
        storeSection.style.display = 'block';
        
        storeSection.innerHTML = `
            <div class="dashboard-header">
                <h2><i class="fas fa-store"></i> Medical Store</h2>
                <div class="header-actions">
                    <button class="btn" id="viewCartBtn">
                        <i class="fas fa-shopping-cart"></i> Cart <span id="cartCount">0</span>
                    </button>
                    <button class="btn" id="viewOrdersBtn">
                        <i class="fas fa-box"></i> Orders
                    </button>
                    <button class="btn" id="backToDashboardBtn">
                        <i class="fas fa-arrow-left"></i> Back
                    </button>
                </div>
            </div>

            <div class="search-filter-container" style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
                <div class="search-box" style="flex: 2; min-width: 200px;">
                    <input type="text" id="medicineSearch" class="input-animated" placeholder="Search medicines...">
                </div>
                <div class="filter-box" style="flex: 1; min-width: 150px;">
                    <select id="categoryFilter" class="input-animated">
                        <option value="all">All Categories</option>
                        <option value="Pain Relief">Pain Relief</option>
                        <option value="Antibiotic">Antibiotic</option>
                        <option value="Vitamins">Vitamins</option>
                        <option value="Allergy">Allergy</option>
                        <option value="Gastric">Gastric</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="BP">BP</option>
                    </select>
                </div>
                <div class="prescription-filter" style="flex: 1; min-width: 150px;">
                    <select id="prescriptionFilter" class="input-animated">
                        <option value="all">All Medicines</option>
                        <option value="otc">OTC (No Rx)</option>
                        <option value="rx">Prescription Only</option>
                    </select>
                </div>
            </div>

            <div class="store-tabs" style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
                <button class="btn store-tab active" id="medicinesTab">💊 Medicines</button>
                <button class="btn store-tab" id="storesTab">🏪 Nearby Stores</button>
                <button class="btn store-tab" id="ordersTab">📋 My Orders</button>
                <button class="btn store-tab" id="healthTipsTab">💡 Health Tips</button>
            </div>

            <div id="medicinesGrid" class="medicines-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;"></div>
            <div id="storesList" class="stores-list" style="display: none;"></div>
            <div id="ordersList" class="orders-list" style="display: none;"></div>
            <div id="healthTips" class="health-tips" style="display: none;"></div>
        `;
        
        document.querySelector('.app').appendChild(storeSection);
        
        const cartModal = document.createElement('div');
        cartModal.id = 'cartModal';
        cartModal.className = 'modal';
        cartModal.style.display = 'none';
        cartModal.innerHTML = `
            <div class="modal-content glass-card">
                <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3><i class="fas fa-shopping-cart"></i> Your Cart</h3>
                    <button class="btn-icon" id="closeCartModal"><i class="fas fa-times"></i></button>
                </div>
                <div id="cartItems" class="cart-items" style="max-height: 400px; overflow-y: auto;"></div>
                <div class="cart-footer" style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
                    <div class="cart-total" style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                        <span>Total:</span>
                        <span id="cartTotal">₹0</span>
                    </div>
                    <div class="prescription-upload" style="margin-bottom: 1rem;">
                        <label for="prescriptionUploadInput" class="btn" style="width: 100%; cursor: pointer;">
                            <i class="fas fa-upload"></i> Upload Prescription
                        </label>
                        <input type="file" id="prescriptionUploadInput" accept=".jpg,.jpeg,.png,.pdf" style="display: none;">
                    </div>
                    <button class="btn btn-primary" id="checkoutBtn" style="width: 100%;">
                        <i class="fas fa-credit-card"></i> Checkout
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(cartModal);
        
        this.medicalStoreSection = document.getElementById('medicalStoreSection');
        this.medicineListElement = document.getElementById('medicinesGrid');
        this.storeListElement = document.getElementById('storesList');
        this.ordersListElement = document.getElementById('ordersList');
        this.healthTipsElement = document.getElementById('healthTips');
        this.searchInput = document.getElementById('medicineSearch');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.prescriptionFilter = document.getElementById('prescriptionFilter');
        
        document.getElementById('medicinesTab').addEventListener('click', () => this.showStoreTab('medicines'));
        document.getElementById('storesTab').addEventListener('click', () => this.showStoreTab('stores'));
        document.getElementById('ordersTab').addEventListener('click', () => this.showStoreTab('orders'));
        document.getElementById('healthTipsTab').addEventListener('click', () => this.showStoreTab('health'));
        document.getElementById('backToDashboardBtn').addEventListener('click', () => {
            this.medicalStoreSection.style.display = 'none';
            this.patientDash.style.display = 'block';
        });
        
        this.searchInput.addEventListener('input', () => this.filterMedicines());
        this.categoryFilter.addEventListener('change', () => this.filterMedicines());
        this.prescriptionFilter.addEventListener('change', () => this.filterMedicines());
        
        document.getElementById('viewCartBtn').addEventListener('click', () => this.showCart());
        document.getElementById('closeCartModal').addEventListener('click', () => this.hideCart());
        document.getElementById('checkoutBtn').addEventListener('click', () => this.checkout());
        document.getElementById('prescriptionUploadInput').addEventListener('change', (e) => {
            this.uploadPrescriptionFile(e.target.files[0]);
        });
        document.getElementById('viewOrdersBtn').addEventListener('click', () => {
            this.showStoreTab('orders');
            this.renderOrders();
        });
        
        this.showStoreTab('medicines');
        this.updateCartCount();
    }

    showStoreTab(tab) {
        document.getElementById('medicinesGrid').style.display = 'none';
        document.getElementById('storesList').style.display = 'none';
        document.getElementById('ordersList').style.display = 'none';
        document.getElementById('healthTips').style.display = 'none';
        
        document.querySelectorAll('.store-tab').forEach(t => t.classList.remove('active'));
        
        switch(tab) {
            case 'medicines':
                document.getElementById('medicinesGrid').style.display = 'grid';
                document.getElementById('medicinesTab').classList.add('active');
                this.renderMedicines();
                break;
            case 'stores':
                document.getElementById('storesList').style.display = 'block';
                document.getElementById('storesTab').classList.add('active');
                this.renderStores();
                break;
            case 'orders':
                document.getElementById('ordersList').style.display = 'block';
                document.getElementById('ordersTab').classList.add('active');
                this.renderOrders();
                break;
            case 'health':
                document.getElementById('healthTips').style.display = 'block';
                document.getElementById('healthTipsTab').classList.add('active');
                this.renderHealthTips();
                break;
        }
    }

    renderMedicines() {
        const filtered = this.filterMedicines();
        let html = '';
        
        filtered.forEach(medicine => {
            const inCart = this.cart.find(item => item.id === medicine.id);
            const cartQuantity = inCart ? inCart.quantity : 0;
            
            html += `
                <div class="medicine-card glass-card" style="padding: 1.5rem;">
                    <div class="medicine-header" style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                        <div>
                            <h3 style="margin: 0; color: var(--primary);">${medicine.image} ${medicine.name}</h3>
                            <p style="margin: 0.25rem 0 0; color: var(--text-secondary);">${medicine.company}</p>
                        </div>
                        <span class="badge" style="background: ${medicine.prescription ? '#ef4444' : '#22c55e'};">
                            ${medicine.prescription ? 'Rx' : 'OTC'}
                        </span>
                    </div>
                    
                    <div class="medicine-details" style="margin-bottom: 1rem;">
                        <p><i class="fas fa-pills"></i> ${medicine.type} • ${medicine.quantity}</p>
                        <p><i class="fas fa-calendar"></i> Exp: ${medicine.expiry}</p>
                        <p><i class="fas fa-tag"></i> ${medicine.category}</p>
                    </div>
                    
                    <div class="price-section" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
                        <span style="font-size: 1.5rem; font-weight: bold; color: var(--success);">₹${medicine.price}</span>
                        <span style="text-decoration: line-through; color: var(--text-secondary);">₹${medicine.mrp}</span>
                        <span class="badge" style="background: var(--danger);">${medicine.discount} off</span>
                    </div>
                    
                    <div class="stock-status" style="margin-bottom: 1rem;">
                        ${medicine.inStock ? 
                            '<span style="color: var(--success);"><i class="fas fa-check-circle"></i> In Stock</span>' : 
                            '<span style="color: var(--danger);"><i class="fas fa-times-circle"></i> Out of Stock</span>'
                        }
                    </div>
                    
                    <div class="cart-controls" style="display: flex; gap: 0.5rem;">
                        ${inCart ? `
                            <button class="btn-icon" onclick="app.decreaseCartItem(${medicine.id})" style="background: var(--danger);">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span style="flex: 1; text-align: center; padding: 0.5rem;">${cartQuantity}</span>
                            <button class="btn-icon" onclick="app.increaseCartItem(${medicine.id})" style="background: var(--success);">
                                <i class="fas fa-plus"></i>
                            </button>
                        ` : `
                            <button class="btn btn-primary" onclick="app.addToCart(${medicine.id})" style="width: 100%;" ${medicine.inStock ? '' : 'disabled'}>
                                <i class="fas fa-cart-plus"></i> Add to Cart
                            </button>
                        `}
                    </div>
                </div>
            `;
        });
        
        this.medicineListElement.innerHTML = html || '<p style="text-align: center; padding: 2rem;">No medicines found</p>';
        this.updateCartCount();
    }

    filterMedicines() {
        const searchTerm = this.searchInput?.value.toLowerCase() || '';
        const category = this.categoryFilter?.value || 'all';
        const prescriptionFilter = this.prescriptionFilter?.value || 'all';
        
        return this.medicines.filter(medicine => {
            const matchesSearch = medicine.name.toLowerCase().includes(searchTerm) ||
                                medicine.company.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || medicine.category === category;
            const matchesPrescription = prescriptionFilter === 'all' ||
                (prescriptionFilter === 'otc' && !medicine.prescription) ||
                (prescriptionFilter === 'rx' && medicine.prescription);
            
            return matchesSearch && matchesCategory && matchesPrescription;
        });
    }

    renderStores() {
        let html = '<div class="stores-grid" style="display: grid; gap: 1.5rem;">';
        
        const sortedStores = [...this.medicalStores].sort((a, b) => a.distance - b.distance);
        
        sortedStores.forEach(store => {
            html += `
                <div class="store-card glass-card" style="padding: 1.5rem;">
                    <div class="store-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h3 style="margin: 0; color: var(--primary);">${store.name}</h3>
                        <span class="badge" style="background: #eab308;">⭐ ${store.rating}</span>
                    </div>
                    
                    <p style="margin-bottom: 0.5rem;"><i class="fas fa-map-marker-alt"></i> ${store.address}</p>
                    <p style="margin-bottom: 0.5rem;"><i class="fas fa-phone"></i> ${store.phone}</p>
                    <p style="margin-bottom: 0.5rem;"><i class="fas fa-clock"></i> ${store.open}</p>
                    <p style="margin-bottom: 1rem;">
                        <i class="fas fa-route"></i> ${store.distance} km away
                        ${store.delivery ? 
                            `<span class="badge" style="background: var(--success); margin-left: 0.5rem;">Delivery ${store.deliveryTime}</span>` : 
                            '<span class="badge" style="background: var(--warning); margin-left: 0.5rem;">Pickup Only</span>'
                        }
                    </p>
                    
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn" onclick="app.getDirections(${store.lat}, ${store.lng})">
                            <i class="fas fa-directions"></i> Directions
                        </button>
                        <button class="btn" onclick="app.callStore('${store.phone}')">
                            <i class="fas fa-phone-alt"></i> Call
                        </button>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        this.storeListElement.innerHTML = html;
    }

    renderOrders() {
        if(this.orders.length === 0) {
            this.ordersListElement.innerHTML = `
                <div class="glass-card" style="text-align: center; padding: 3rem;">
                    <i class="fas fa-box-open" style="font-size: 4rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                    <h3>No Orders Yet</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Visit Medical Store to order medicines</p>
                    <button class="btn btn-primary" onclick="app.showStoreTab('medicines')">
                        <i class="fas fa-store"></i> Browse Medicines
                    </button>
                </div>
            `;
            return;
        }
        
        let html = '<div class="orders-grid" style="display: grid; gap: 1.5rem;">';
        
        this.orders.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(order => {
            const statusColor = {
                'pending': '#eab308',
                'confirmed': '#3b82f6',
                'shipped': '#8b5cf6',
                'delivered': '#22c55e',
                'cancelled': '#ef4444'
            }[order.status] || '#eab308';
            
            html += `
                <div class="order-card glass-card" style="padding: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h3 style="margin: 0;">Order #${order.id}</h3>
                        <span class="badge" style="background: ${statusColor};">${order.status.toUpperCase()}</span>
                    </div>
                    
                    <p style="margin-bottom: 0.5rem;"><i class="fas fa-calendar"></i> ${order.date}</p>
                    <p style="margin-bottom: 0.5rem;"><i class="fas fa-clock"></i> ${order.time}</p>
                    
                    <div style="margin: 1rem 0;">
                        <h4>Items:</h4>
                        ${order.items.map(item => `
                            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--border);">
                                <span>${item.name} x${item.quantity}</span>
                                <span>₹${item.price * item.quantity}</span>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 2px solid var(--border);">
                        <strong>Total:</strong>
                        <strong style="color: var(--success);">₹${order.total}</strong>
                    </div>
                    
                    <div style="display: flex; gap: 1rem; margin-top: 1rem; flex-wrap: wrap;">
                        <button class="btn" onclick="app.trackOrder('${order.id}')">
                            <i class="fas fa-truck"></i> Track
                        </button>
                        ${order.status === 'delivered' ? `
                            <button class="btn" onclick="app.reorder('${order.id}')">
                                <i class="fas fa-redo"></i> Reorder
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        this.ordersListElement.innerHTML = html;
    }

    renderHealthTips() {
        const tips = [
            { icon: '💊', title: 'Take Medicines on Time', description: 'Set reminders to take your medicines at the same time each day.', color: '#3b82f6' },
            { icon: '💧', title: 'Stay Hydrated', description: 'Drink at least 8 glasses of water daily for better health.', color: '#22c55e' },
            { icon: '🏃', title: 'Regular Exercise', description: '30 minutes of exercise daily can prevent many diseases.', color: '#eab308' },
            { icon: '😴', title: 'Proper Sleep', description: 'Get 7-8 hours of sleep for good health.', color: '#8b5cf6' },
            { icon: '🥗', title: 'Healthy Diet', description: 'Eat balanced diet with fruits and vegetables.', color: '#ef4444' },
            { icon: '🩺', title: 'Regular Checkups', description: 'Visit doctor for regular health checkups.', color: '#ec4899' }
        ];
        
        let html = '<div class="tips-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">';
        
        tips.forEach(tip => {
            html += `
                <div class="tip-card glass-card" style="padding: 1.5rem; text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">${tip.icon}</div>
                    <h3 style="margin-bottom: 0.5rem; color: ${tip.color};">${tip.title}</h3>
                    <p style="color: var(--text-secondary);">${tip.description}</p>
                </div>
            `;
        });
        
        html += '</div>';
        this.healthTipsElement.innerHTML = html;
    }

    addToCart(medicineId) {
        const medicine = this.medicines.find(m => m.id === medicineId);
        if(!medicine) return;
        
        const existingItem = this.cart.find(item => item.id === medicineId);
        
        if(existingItem) {
            existingItem.quantity++;
        } else {
            this.cart.push({ ...medicine, quantity: 1 });
        }
        
        this.saveCartData();
        this.renderMedicines();
        this.updateCartCount();
        this.showNotification(`${medicine.name} added to cart`, 'success');
    }

    increaseCartItem(medicineId) {
        const item = this.cart.find(item => item.id === medicineId);
        if(item) {
            item.quantity++;
            this.saveCartData();
            this.renderMedicines();
            this.updateCartCount();
        }
    }

    decreaseCartItem(medicineId) {
        const itemIndex = this.cart.findIndex(item => item.id === medicineId);
        if(itemIndex === -1) return;
        
        if(this.cart[itemIndex].quantity > 1) {
            this.cart[itemIndex].quantity--;
        } else {
            this.cart.splice(itemIndex, 1);
        }
        
        this.saveCartData();
        this.renderMedicines();
        this.updateCartCount();
    }

    updateCartCount() {
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElement = document.getElementById('cartCount');
        if(cartCountElement) {
            cartCountElement.textContent = count;
        }
    }

    showCart() {
        const cartModal = document.getElementById('cartModal');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if(this.cart.length === 0) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                    <p>Your cart is empty</p>
                    <button class="btn" onclick="app.hideCart(); app.showStoreTab('medicines');">
                        Browse Medicines
                    </button>
                </div>
            `;
            cartTotal.textContent = '₹0';
        } else {
            let html = '';
            let total = 0;
            
            this.cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                html += `
                    <div class="cart-item" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-bottom: 1px solid var(--border); flex-wrap: wrap;">
                        <div style="flex: 2; min-width: 150px;">
                            <h4 style="margin: 0;">${item.name}</h4>
                            <p style="margin: 0; color: var(--text-secondary);">₹${item.price} each</p>
                            ${item.prescription ? '<span class="badge" style="background: #ef4444;">Rx Required</span>' : ''}
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <button class="btn-icon" onclick="app.decreaseCartItem(${item.id})" style="width: 30px; height: 30px;">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                            <button class="btn-icon" onclick="app.increaseCartItem(${item.id})" style="width: 30px; height: 30px;">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        
                        <div style="flex: 1; text-align: right; min-width: 60px;">
                            <strong>₹${itemTotal}</strong>
                        </div>
                        
                        <button class="btn-icon" onclick="app.removeFromCart(${item.id})" style="background: var(--danger); width: 30px; height: 30px;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            });
            
            cartItems.innerHTML = html;
            cartTotal.textContent = `₹${total}`;
        }
        
        cartModal.style.display = 'flex';
    }

    hideCart() {
        document.getElementById('cartModal').style.display = 'none';
    }

    removeFromCart(medicineId) {
        const itemIndex = this.cart.findIndex(item => item.id === medicineId);
        if(itemIndex !== -1) {
            const itemName = this.cart[itemIndex].name;
            this.cart.splice(itemIndex, 1);
            this.saveCartData();
            this.renderMedicines();
            this.updateCartCount();
            this.showCart();
            this.showNotification(`${itemName} removed from cart`, 'info');
        }
    }

    checkout() {
        if(this.cart.length === 0) {
            this.showNotification('Cart is empty', 'error');
            return;
        }
        
        const prescriptionItems = this.cart.filter(item => item.prescription);
        
        if(prescriptionItems.length > 0 && !this.prescriptionUploaded) {
            if(confirm('Some items require prescription. Please upload prescription to continue.')) {
                document.getElementById('prescriptionUploadInput').click();
            }
            return;
        }
        
        const order = {
            id: 'ORD' + Date.now(),
            items: [...this.cart],
            total: this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            status: 'pending',
            prescription: prescriptionItems.length > 0
        };
        
        this.orders.push(order);
        this.saveOrdersData();
        
        this.cart = [];
        this.saveCartData();
        this.prescriptionUploaded = false;
        
        this.hideCart();
        this.showStoreTab('orders');
        this.renderOrders();
        this.updateCartCount();
        this.renderMedicines();
        
        this.showNotification('Order placed successfully!', 'success');
    }

    uploadPrescriptionFile(file) {
        if(!file) return;
        
        this.showNotification(`Uploading ${file.name}...`, 'info');
        
        setTimeout(() => {
            this.prescriptionUploaded = true;
            this.showNotification('Prescription uploaded successfully!', 'success');
            
            if(confirm('Prescription uploaded. Proceed to checkout?')) {
                this.checkout();
            }
        }, 2000);
    }

    getDirections(lat, lng) {
        if(this.userLocation) {
            const url = `https://www.google.com/maps/dir/${this.userLocation.lat},${this.userLocation.lng}/${lat},${lng}`;
            window.open(url, '_blank');
        } else {
            alert('Please enable location first');
        }
    }

    callStore(phone) {
        window.location.href = `tel:${phone}`;
    }

    trackOrder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if(order) {
            this.showNotification(`Order #${orderId} is ${order.status}`, 'info');
        }
    }

    reorder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if(order) {
            order.items.forEach(item => {
                const existingCartItem = this.cart.find(c => c.id === item.id);
                if(existingCartItem) {
                    existingCartItem.quantity += item.quantity;
                } else {
                    this.cart.push({...item});
                }
            });
            
            this.saveCartData();
            this.showStoreTab('medicines');
            this.renderMedicines();
            this.updateCartCount();
            this.showNotification('Items added to cart', 'success');
        }
    }

    addMedicalStoreButton() {
        if(document.getElementById('medicalStoreBtn')) return;
        
        const buttonContainer = document.createElement('div');
        buttonContainer.style.position = 'fixed';
        buttonContainer.style.bottom = '100px';
        buttonContainer.style.right = '20px';
        buttonContainer.style.zIndex = '999';
        
        buttonContainer.innerHTML = `
            <button class="btn btn-primary" id="medicalStoreBtn" style="box-shadow: 0 0 20px var(--primary);">
                <i class="fas fa-store"></i> Medical Store
            </button>
        `;
        
        document.body.appendChild(buttonContainer);
        
        document.getElementById('medicalStoreBtn').addEventListener('click', () => {
            this.createMedicalStoreUI();
            this.authSection.style.display = 'none';
            this.doctorDash.style.display = 'none';
            this.patientDash.style.display = 'none';
            this.medicalStoreSection.style.display = 'block';
        });
    }

    // ========== EMERGENCY FUNCTIONS ==========
    triggerEmergency() {
        this.emergencyOverlay.style.display = 'flex';
        
        let emergencyMsg = {
            id: Date.now(),
            sender: 'EMERGENCY ALERT',
            text: '🚨 Patient activated emergency!',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            chatId: 'emergency'
        };
        
        this.chatMessages.push(emergencyMsg);
        this.saveChatData();
        
        if(this.currentUser === 'doctor') {
            this.renderChatMessages();
        }
        
        setTimeout(() => {
            this.dismissEmergencyFunc();
        }, 5000);
    }

    dismissEmergencyFunc() {
        this.emergencyOverlay.style.display = 'none';
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            z-index: 10001;
            animation: slideInRight 0.3s ease;
        `;
        notification.innerHTML = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ========== DATA STORAGE ==========
    saveData() {
        localStorage.setItem('medicore_appointments', JSON.stringify(this.appointments));
    }

    loadData() {
        let saved = localStorage.getItem('medicore_appointments');
        if(saved) {
            this.appointments = JSON.parse(saved);
        } else {
            this.appointments = [
                { id: 1, patient: 'Alex', doctor: 'Dr. Sarah', date: '2026-02-15', status: 'approved' },
                { id: 2, patient: 'Maria', doctor: 'Dr. Adams', date: '2026-02-16', status: 'pending' },
                { id: 3, patient: 'John', doctor: 'Dr. Sarah', date: '2026-02-18', status: 'pending' }
            ];
        }
    }
    
    saveChatData() {
        localStorage.setItem('medicore_chat', JSON.stringify(this.chatMessages));
    }
    
    loadChatData() {
        let saved = localStorage.getItem('medicore_chat');
        if(saved) {
            this.chatMessages = JSON.parse(saved);
        }
    }

    saveCartData() {
        localStorage.setItem('medicore_cart', JSON.stringify(this.cart));
    }

    loadCartData() {
        let saved = localStorage.getItem('medicore_cart');
        if(saved) {
            this.cart = JSON.parse(saved);
        }
    }

    saveOrdersData() {
        localStorage.setItem('medicore_orders', JSON.stringify(this.orders));
    }

    loadOrdersData() {
        let saved = localStorage.getItem('medicore_orders');
        if(saved) {
            this.orders = JSON.parse(saved);
        }
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', () => {
    window.app = new MedicalPlatform();
});

// Video call emergency fix
setTimeout(() => {
    let videoBtn = document.getElementById('startVideoCallBtn');
    if(videoBtn) {
        videoBtn.style.display = 'block';
        videoBtn.onclick = () => window.app?.startVideoCall();
    }
}, 2000);

// Force Medical Store button to show
function fixMedicalStoreButton() {
    console.log("🏥 Fixing Medical Store button...");
    
    // Check if app exists
    if(!window.app) {
        console.log("⏳ App not ready, waiting...");
        setTimeout(fixMedicalStoreButton, 1000);
        return;
    }
    
    // Check if button already exists
    if(document.getElementById('medicalStoreBtn')) {
        console.log("✅ Medical Store button already exists");
        return;
    }
    
    // Create button
    const btn = document.createElement('button');
    btn.id = 'medicalStoreBtn';
    btn.className = 'btn btn-primary';
    btn.innerHTML = '<i class="fas fa-store"></i> Medical Store';
    btn.style.position = 'fixed';
    btn.style.bottom = '100px';
    btn.style.right = '20px';
    btn.style.zIndex = '999';
    btn.style.boxShadow = '0 0 20px var(--primary)';
    btn.style.padding = '12px 24px';
    btn.style.fontSize = '16px';
    
    btn.onclick = function() {
        if(window.app) {
            // Hide other sections
            document.getElementById('authSection').style.display = 'none';
            document.getElementById('doctorDashboard').style.display = 'none';
            document.getElementById('patientDashboard').style.display = 'none';
            
            // Create and show medical store
            window.app.createMedicalStoreUI();
        }
    };
    
    document.body.appendChild(btn);
    console.log("✅ Medical Store button created!");
}

// Run after page loads
setTimeout(fixMedicalStoreButton, 2000);

// Direct test function
window.testMedicalStore = function() {
    if(window.app) {
        window.app.createMedicalStoreUI();
    } else {
        alert("App not loaded yet!");
    }
};

// Add test button
setTimeout(() => {
    const testBtn = document.createElement('button');
    testBtn.innerHTML = '🏥 Test Store';
    testBtn.style.position = 'fixed';
    testBtn.style.bottom = '150px';
    testBtn.style.right = '20px';
    testBtn.style.zIndex = '999';
    testBtn.style.background = '#22c55e';
    testBtn.style.color = 'white';
    testBtn.style.border = 'none';
    testBtn.style.padding = '10px 20px';
    testBtn.style.borderRadius = '40px';
    testBtn.style.cursor = 'pointer';
    testBtn.style.fontSize = '14px';
    testBtn.onclick = function() {
        window.testMedicalStore();
    };
    document.body.appendChild(testBtn);
}, 3000);