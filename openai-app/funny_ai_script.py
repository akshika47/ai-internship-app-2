#!/usr/bin/env python3
"""
Simple script to call OpenAI API and get something funny about AI.
"""

import os
import sys
from openai import OpenAI

from dotenv import load_dotenv
load_dotenv()

def get_funny_ai_content():
    """
    Call OpenAI API to get something funny about AI.
    """
    # Initialize OpenAI client
    client = OpenAI(
        api_key=os.getenv('OPENAI_API_KEY')
    )
    
    if not client.api_key:
        print("❌ Error: OPENAI_API_KEY environment variable not set!")
        print("Please set your OpenAI API key:")
        print("export OPENAI_API_KEY='your-api-key-here'")
        sys.exit(1)
    
    try:
        print("🤖 Asking AI for something funny about AI...")
        print("-" * 50)
        
        # Make API call to OpenAI
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system", 
                    "content": "You are a witty comedian who specializes in AI and technology humor. Keep responses fun, clever, and appropriate."
                },
                {
                    "role": "user", 
                    "content": "Tell me something funny about AI - it could be a joke, a funny observation, or an amusing scenario. Make it clever and entertaining!"
                }
            ],
            max_tokens=200,
            temperature=0.9
        )
        
        # Extract and return the funny content
        funny_content = response.choices[0].message.content.strip()
        return funny_content
        
    except Exception as e:
        print(f"❌ Error calling OpenAI API: {e}")
        return None

def main():
    """
    Main function to run the script.
    """
    print("🎭 AI Comedy Generator")
    print("=" * 50)
    
    funny_content = get_funny_ai_content()
    
    if funny_content:
        print("🎉 Here's something funny about AI:")
        print("-" * 50)
        print(funny_content)
        print("-" * 50)
        print("😄 Hope that made you smile!")
    else:
        print("😞 Sorry, couldn't generate funny content right now.")

if __name__ == "__main__":
    main() 