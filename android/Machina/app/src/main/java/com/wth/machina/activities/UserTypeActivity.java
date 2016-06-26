package com.wth.machina.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.wth.machina.R;

public class UserTypeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getWindow().getDecorView().setBackgroundResource(R.drawable.machina_user_type);

        Button mLoginButton = (Button) findViewById(R.id.btnLogin);
        mLoginButton.setBackgroundResource(android.R.color.transparent);
        mLoginButton.setText("");
        mLoginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), RegisterActivity.class));
                finish();
            }
        });
        Button mRegisterButton = (Button) findViewById(R.id.btnRegister);
        mRegisterButton.setBackgroundResource(android.R.color.transparent);
        mRegisterButton.setText("");
        mRegisterButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(), RegisterActivity.class));
                finish();
            }
        });
    }

}
